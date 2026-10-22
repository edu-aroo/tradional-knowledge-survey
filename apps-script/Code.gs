/**
 * Réception des réponses de l'enquête CET — questionnaire A (gestionnaires)
 * → Google Sheets + Google Drive (documents joints)
 * ------------------------------------------------------------------------------
 * À coller dans : Google Sheet > Extensions > Apps Script (script lié à la feuille).
 * Voir README.md, étape 2, pour le déploiement en « Application Web ».
 *
 * Onglets créés automatiquement :
 *   - Reponses : une ligne par aire / structure répondante
 *   - Journal  : erreurs éventuelles
 * Les documents joints sont enregistrés dans un dossier Drive (un sous-dossier par réponse).
 */

// ID du dossier Google Drive pour les documents (la partie après /folders/ dans l'URL du dossier).
// Laisser vide pour créer automatiquement un dossier « Enquete_CET_documents » à la racine du Drive.
const DOCS_FOLDER_ID = "";
const SHEET_RESPONSES = "Reponses";
const SHEET_LOG = "Journal";
// Facultatif : adresse e-mail qui reçoit une notification à chaque réponse
const NOTIFY_EMAIL = "";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.website) return json_({ ok: true });                       // champ piège anti-robots
    if (!data.response_id || !data.general) throw new Error("Données incomplètes");

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (alreadyStored_(ss, data.response_id)) return json_({ ok: true, duplicate: true, id: data.response_id });

    const links = saveFiles_(data.photos || [], data.response_id, data.general.id_structure);
    const meta = {
      response_id: data.response_id,
      horodatage_serveur: new Date(),
      survey_version: data.survey_version,
      started_at: data.started_at,
      submitted_at_client: data.submitted_at_client,
      duration_min: data.duration_min
    };
    appendObject_(ss, SHEET_RESPONSES, Object.assign({}, meta, data.general, { documents_liens: links.join(" | ") }));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, "Enquête CET (gestionnaires) — nouvelle réponse",
        "Structure : " + (data.general.id_structure || "?") + "\nAire : " + (data.general.id_aire || "?") +
        "\nDocuments joints : " + links.length + "\nRéférence : " + data.response_id.slice(0, 8).toUpperCase());
    }
    return json_({ ok: true, id: data.response_id });
  } catch (err) {
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const log = ss.getSheetByName(SHEET_LOG) || ss.insertSheet(SHEET_LOG);
      log.appendRow([new Date(), String(err), (e && e.postData) ? e.postData.contents.slice(0, 2000) : ""]);
    } catch (ignored) {}
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Test rapide : ouvrir l'URL /exec dans le navigateur doit afficher {"ok":true,...}
function doGet() {
  return json_({ ok: true, message: "Service de collecte actif" });
}

/* ----------------------------------------------------------------- utilitaires */

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function alreadyStored_(ss, id) {
  const sh = ss.getSheetByName(SHEET_RESPONSES);
  if (!sh || sh.getLastRow() < 2) return false;
  return !!sh.getRange(2, 1, sh.getLastRow() - 1, 1).createTextFinder(id).matchEntireCell(true).findNext();
}

/** Ajoute une ligne ; crée les colonnes manquantes à la volée (l'ordre des colonnes reste stable). */
function appendObject_(ss, name, obj) {
  const sh = ss.getSheetByName(name) || ss.insertSheet(name);
  const lastCol = sh.getLastColumn();
  let headers = lastCol > 0 ? sh.getRange(1, 1, 1, lastCol).getValues()[0] : [];
  const missing = Object.keys(obj).filter(function (k) { return headers.indexOf(k) === -1; });
  if (missing.length) {
    headers = headers.concat(missing);
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sh.setFrozenRows(1);
  }
  const row = headers.map(function (h) { return clean_(obj[h]); });
  const range = sh.getRange(sh.getLastRow() + 1, 1, 1, row.length);
  range.setNumberFormat("@");                                   // texte : évite « 1–3 » → date, etc.
  const iDate = headers.indexOf("horodatage_serveur");
  if (iDate >= 0) range.getCell(1, iDate + 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");
  range.setValues([row]);
}

/** Évite l'interprétation en formule (=, +, -, @). */
function clean_(v) {
  if (v === undefined || v === null) return "";
  if (v instanceof Date || typeof v === "number" || typeof v === "boolean") return v;
  const s = String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function docsRoot_() {
  if (DOCS_FOLDER_ID) return DriveApp.getFolderById(DOCS_FOLDER_ID);
  const it = DriveApp.getFoldersByName("Enquete_CET_documents");
  return it.hasNext() ? it.next() : DriveApp.createFolder("Enquete_CET_documents");
}

function saveFiles_(files, id, org) {
  if (!files.length) return [];
  const safeOrg = String(org || "structure").replace(/[^\wÀ-ÿ -]/g, "").slice(0, 40).trim();
  const folder = docsRoot_().createFolder(Utilities.formatDate(new Date(), "Indian/Antananarivo", "yyyy-MM-dd") + "_" + safeOrg + "_" + id.slice(0, 8));
  return files.slice(0, 8).map(function (f, i) {
    const blob = Utilities.newBlob(Utilities.base64Decode(f.data), f.type || "application/octet-stream", (i + 1) + "_" + f.name);
    return folder.createFile(blob).getUrl();
  });
}

/** À exécuter une fois depuis l'éditeur pour accorder les autorisations (Sheets + Drive). */
function autoriser() {
  docsRoot_();
  SpreadsheetApp.getActiveSpreadsheet().getName();
  if (NOTIFY_EMAIL) MailApp.getRemainingDailyQuota();
}
