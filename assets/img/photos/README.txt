Photos de la page (bandeau, accueil, sections, remerciements).
Par défaut, la page charge les photos depuis Wikimedia Commons. Pour les héberger
avec le site, lancer une fois dans R (depuis le dossier du projet) :
  source("tools/download_photos.R")
Les fichiers sont enregistrés ici sous le nom indiqué dans SURVEY.PHOTOS (key.jpg).

Crédits : auteurs indiqués dans SURVEY.PHOTOS (Wikimedia Commons, licences CC BY-SA 2.0 / 4.0).
L'attribution (auteur + licence + lien) est affichée sur chaque photo et en pied de page :
ne pas la retirer. Pour utiliser vos propres photos, remplacer les fichiers et
mettre à jour caption / credit / license / page dans survey-config.js.
