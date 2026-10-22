# Enquête CET — Questionnaire A (gestionnaires d'AMP / LMMA et structures d'appui)

Online questionnaire (GitHub Pages) → Google Sheets (+ Google Drive for attached documents) → R project → HTML report.
Same structure and engine as the seagrass and reef surveys. **Only category A (sheet "A - Gestionnaire") is included**; categories B–D (détenteurs de savoirs, usagers, questionnaire aléatoire) and the consent/identification sheet F will be collected on KoboToolbox.

```
enquete-cet-gestionnaires/
├── index.html                  ← the questionnaire (GitHub Pages serves this)
├── assets/
│   ├── js/survey-config.js     ← THE file to edit: texts, logos, photos, questions, Apps Script URL
│   ├── js/app.js               ← form engine (no need to edit)
│   ├── css/style.css           ← colours / layout
│   └── img/logos/, img/photos/ ← partner logos; optional local copies of the photos
├── apps-script/Code.gs         ← receives answers → Google Sheets; attached documents → Google Drive
├── tools/make_codebook.js      ← regenerates analysis/codebook.csv after editing questions
├── tools/download_photos.R     ← downloads the photos into assets/img/photos/
├── analysis/                   ← R project (open enquete-cet.Rproj)
│   ├── R/00_packages.R  01_import.R  02_simulate.R  03_clean.R  functions.R  config.R
│   ├── report/rapport.Rmd      ← one block per question, by section and by volet
│   ├── codebook.csv            ← variable names, labels, options, display conditions
│   └── run_all.R               ← import + public report + internal report
└── rapport/index.html          ← rendered public report (currently built from FAKE data)
```

## How the form is organised

1. **Présentation + consentement**, then **Identification** (structure, aire, respondent, agreement to be cited).
2. Sections **0, D1–D7, S1, S2** of the sheet, one page each.
3. **Q59 — Choix des volets**: Mangroves / Herbiers marins / Récifs coralliens / Pêche. Only the ticked volets are shown afterwards, each split into *Suivi*, *Restauration* (not for Pêche) and *Harmonisation*. They are grouped under "Volet …" in the side menu.
4. **Clôture (FFOM)** and **Documents**: the respondent can tick the documents they can share and **attach them** (PDF, Word, Excel, CSV, photos — 8 files, 10 MB each). The files go to a Google Drive folder, one sub-folder per response, and the links are stored in the `documents_liens` column.

Answers are saved in the browser while filling, so a manager can stop and resume later on the same computer.

---

## Step 1 — Customise the form (15 min)

Open `assets/js/survey-config.js` and fill the `META` block: `organizer`, `contactName`, `contactEmail`, `deadline`, `privacy` (all marked `[...]`). Check `intro` and `estimatedTime` (I estimated 45–75 min depending on the number of volets; please time it yourself).

- **Logos**: copy `ihsm.png` and `fapbm.png` into `assets/img/logos/` (edit `logos` to add or remove partners). Until the files are there, the names show as text.
- **Photos**: 15 photos from Wikimedia Commons: Vezo pirogues, women net fishing, gleaning on the reef flat (Belo-sur-Mer), traditional fish traps, net preparation, beach seine (Morondava), Mangily village, mangroves (Belo-sur-Mer, Andavadoaka), Anakao lagoon and a coral reef. They are licensed **CC BY-SA 2.0 / 4.0**, which requires credit: the author, licence and link appear on each photo and in the footer, so don't remove them. Each section has its own banner photo (`photo` in each step). By default they load from Wikimedia; `source("tools/download_photos.R")` (run from the project folder) stores local copies. To use your own field photos, replace the files and edit `PHOTOS`. Several photos show identifiable people (photographers' public Commons uploads); replace them if you prefer landscapes only.

## Step 2 — Connect the form to Google Sheets + Drive (10 min)

1. Create a Google Sheet (e.g. *Enquête CET — gestionnaires*) with the account that will own the data.
2. **Extensions → Apps Script**, paste `apps-script/Code.gs`, save.
3. Optional: put a Drive folder ID in `DOCS_FOLDER_ID` (otherwise a folder `Enquete_CET_documents` is created), and your e-mail in `NOTIFY_EMAIL`.
4. Run `autoriser` once and accept the permissions (Sheets + Drive; Google warns the app is unverified → *Advanced → Go to project*).
5. **Deploy → New deployment → Web app**, *Execute as: Me*, *Who has access: Anyone*. Copy the `/exec` URL into `appsScriptUrl` in `survey-config.js`.
6. Test: open the `/exec` URL (should show `{"ok":true,...}`), then submit the form once **with a small attached file** and check the `Reponses` tab and the Drive folder.
- Later changes to the script: **Deploy → Manage deployments → ✏️ → New version** (keeps the same URL).
- Multiple answers are separated by ` | `; "Autre / préciser" texts are in `qXXX_autre`; grids are split into one column per row (`q009_annee`, `q011_collecte`, `q047_recif`…); surfaces have a `_unite` column.

## Step 3 — Publish on GitHub Pages (10 min)

Create a public repository (e.g. `enquete-cet-gestionnaires`), upload the folder, then *Settings → Pages → Deploy from a branch → main / (root)*. The form is at `https://<user>.github.io/enquete-cet-gestionnaires/`. No data is stored in the repository (`analysis/data/` is git-ignored). Test it on a phone and a computer, then delete your test rows in the Sheet (and the test files in Drive).

## Step 4 — Analyse in R

1. Open `analysis/enquete-cet.Rproj`. `R/00_packages.R` installs missing packages.
2. Test now: `DATA_SOURCE <- "simulated"` in `R/config.R`, then `source("run_all.R")`. The fake data respect the volets and conditional questions.
3. Real data: set `SHEET_URL` and `DATA_SOURCE <- "sheet"` in `R/config.R`, then `source("run_all.R")` (first time: authorise *Tidyverse API Packages*).
4. Outputs:
   - `rapport/index.html`, the **public** report: charts for every closed question, numeric summaries, a "documents vérifiables" chart (produit / promis / inexistant for Q10, Q28, Q33), and only the **number** of answers to open questions.
   - `analysis/data/rapport_interne.html`, the **internal** report: in addition, the list of structures and the full open answers (searchable tables by section). Never publish it.
5. Surfaces are converted to hectares in `*_ha` columns (Q47 grid in ha/km²; Q77–78, Q107–108, Q137–138 in ha/m²).

This survey is largely qualitative (≈ 60 open questions). The internal report is the starting point; for thematic coding, export the open answers with `dat$reponses |> select(id_structure, id_aire, q001:q045)` and code them in your usual tool (e.g. a coding grid in Excel, or `quanteda`/`tidytext` in R).

---

## Adaptations made to the sheet — please check

The sheet was written for **face-to-face interviews**; the online version is self-completed by the manager, so some interviewer instructions were adapted.

| Q | Change | Why |
|---|---|---|
| — | **Added an "Identification" step**: structure, aire (name + location), respondent name (optional), e-mail (optional), agreement to be cited by name | Category A had no field identifying the structure or the area; it is needed to interpret answers and to link them with the Kobo data from the same site. The "cité nommément" item comes from sheet F |
| — | Online consent checkbox on the first page | Replaces the oral consent of sheet F for this self-completed questionnaire |
| 5 | Removed "(laisser répondre, puis relancer)" | Interviewer instruction |
| 10, 28, 33 | "[V] … Pouvez-vous me le montrer ?" → "Pouvez-vous nous le transmettre ?" with options **Oui — document transmis / Oui — sera transmis ultérieurement / N'existe pas** | Online equivalent of *Produit / Promis / Inexistant*; documents can be attached at the end. The report maps them back to Produit / Promis / Inexistant |
| 42 | Help text "Noter : produit / promis / inexistant" replaced by examples (PAG, dina, compte rendu) | Interviewer note |
| 175 | **[C] credibility question removed** | It is an interview technique, specific to each site ("à insérer selon le site"); it cannot be pre-filled in a common online form. Keep it for the interviews |
| 176 | "Documents obtenus en fin d'entretien" → "Quels documents pouvez-vous partager ?" + **file upload** (+ options "Aucun", "Autre") | Online equivalent of collecting documents at the end of the interview |
| 9, 11, 47 | Grids: one field per row (year, number or text); Q47 with a unit selector (ha / km²) | Grid questions |
| 77–78, 107–108, 137–138 | Number + unit selector (ha / m²) | "Préciser l'unité" |
| 2, 5, 12, 23, 32, 48, 52, 58 | "Autre (préciser)" added | Type is "Choix multiple + autre" but the option was missing |
| 46 | Shown only if Q2 includes "AMP" | AMP category does not apply to LMMA / transfert de gestion |
| 8, 18, 22, 25, 27–28, 31, 40, 44, 54, 56 | Conditional ("Si oui…") | |
| 59 | Volets shown only if ticked; volet questions conditional on "Réalisez-vous un suivi / des actions de restauration ?" (Non → "pourquoi" only; "Si oui, qui participe / rôle / formation" if Oui or En partie; surface ciblée also if "Prévu / en projet") | As instructed in the sheet ("ne remplir ensuite que les volets cochés") |
| 87, 117, 147, 168 | Shown if Q86/116/146/167 = "Sous conditions" | |
| **88, 118, 169** | "Méthodes recommandées pour un protocole national": the sheet used the **coral-reef list** (LIT, quadrats, photo-quadrats, points intercepts) for **all** volets. Replaced by each volet's own method list (Q70 mangroves, Q100 herbiers, Q160 pêche). Q148 (récifs) uses the Q130 list | LIT / photo-quadrats do not apply to mangroves or fisheries |

**Points I did not change — worth deciding:**
- **Length.** A manager ticking all 4 volets answers ~170 questions, including the same 7 harmonisation questions four times. Consider asking harmonisation (Q83–89 etc.) **once** for all volets, with a per-ecosystem method question only.
- **Q4, Q6, Q16, Q19, Q29, Q36, Q38** are open questions designed for a conversation; online answers will be shorter. Consider a short follow-up interview with a subsample of managers.
- **Q50** (budget, free text "fourchette") vs **Q65/95/125/155** (budget in ranges): use the same ranges in Q50 for comparability.
- **Q49 and Q51** are required numbers: an organisation without monitoring must enter 0. Consider adding a "pas de suivi" option or making them conditional.
- **Q46** asks the AMP category as free text ("2, 4, 5…"): a list (IUCN II, IV, V, VI…) would be cleaner to analyse.
- **Q34** "À qui appartiennent ces données ?" is free text; a list (structure / communauté / bailleur / partagée / ne sait pas) would ease comparison.

## Limits

- Answers are stored in the respondent's browser while filling — not across devices; attached files must be re-added if they resume later.
- The `/exec` URL is public: a hidden anti-bot field is included and duplicates are filtered by `response_id`; check for test or spam rows.
- Attachments: 8 files, 10 MB each, 25 MB in total; larger documents should be sent by e-mail.
- French only (Malagasy version possible by duplicating `survey-config.js`).
