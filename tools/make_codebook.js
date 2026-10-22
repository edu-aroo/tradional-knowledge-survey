// Génère analysis/codebook.csv à partir de assets/js/survey-config.js
// Usage : node tools/make_codebook.js
const path = require("path"), fs = require("fs");
const S = require(path.join(__dirname, "../assets/js/survey-config.js"));
const rows = [];
const q = v => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
for (const st of S.STEPS) {
  const stepCond = st.showIf ? JSON.stringify(st.showIf) : "";
  for (const x of st.questions) {
    const opts = x.options || [];
    const cond = x.showIf ? JSON.stringify(x.showIf) : "";
    const base = { sheet: "Reponses", section: st.key, step: st.title, group: st.group || "", n: x.n,
                   required: x.required ? "Oui" : "Non", condition: cond, step_condition: stepCond };
    if (x.type === "file") { rows.push({ ...base, variable: x.id + "_nb_fichiers", label: "Nombre de documents joints", type: "number", options: "" }); continue; }
    if (x.type === "grid") {
      for (const r of x.rows) rows.push({ ...base, variable: `${x.id}_${r.key}`, label: `${x.label} — ${r.label}`,
                                          type: r.type === "text" ? "grid_text" : "grid", options: "" });
      if (x.units) rows.push({ ...base, variable: x.id + "_unite", label: x.label + " — unité", type: "unit", options: x.units.join(" | ") });
      continue;
    }
    rows.push({ ...base, variable: x.id, label: x.label, type: x.type, options: opts.join(" | ") });
    if (x.units) rows.push({ ...base, variable: x.id + "_unite", label: x.label + " — unité", type: "unit", options: x.units.join(" | ") });
    if (x.other) rows.push({ ...base, variable: x.id + "_autre", label: x.label + " — précision (Autre / préciser)", type: "text", options: "", required: "Non" });
    if (x.explain) rows.push({ ...base, variable: x.id + "_pourquoi", label: x.label + " — " + x.explain, type: "textarea", options: "", required: "Non" });
    if (x.detail) rows.push({ ...base, variable: x.id + "_detail", label: x.detail.label, type: x.detail.type === "number" ? "number" : "text", options: "", required: "Non" });
  }
}
const cols = ["sheet", "variable", "n", "section", "group", "step", "label", "type", "options", "required", "condition", "step_condition"];
const csv = [cols.join(",")].concat(rows.map(r => cols.map(c => q(r[c])).join(","))).join("\n");
fs.writeFileSync(path.join(__dirname, "../analysis/codebook.csv"), csv + "\n", "utf8");
console.log(rows.length + " variables écrites dans analysis/codebook.csv");
