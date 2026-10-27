/* =====================================================================
   CONFIGURATION — ENQUÊTE CET, QUESTIONNAIRE A (GESTIONNAIRES)
   Fichier unique à modifier : textes, logos, photos, questions, URL Apps Script.
   Les identifiants (id) deviennent les noms de colonnes dans Google Sheets et
   les noms de variables dans R : ne pas les modifier une fois la collecte lancée.

   Types : text, email, textarea, number, year, radio, checkbox, scale, grid, file
   Options : other, explain, detail, units, max, help,
             showIf {q, eq | ne | starts | any:[...] | notOnly}  (conditions en cascade)
   Étapes : showIf (étape entière), group (titre dans la barre latérale), photo (bandeau)
   ===================================================================== */

const SURVEY = {
  META: {
  "version": "1.0",
  "title": "Enquête sur la documentation des savoirs écologiques locaux dans la gestion des aires marines à Madagascar",
  "subtitle": "Questionnaire A — gestionnaires d'AMP, de LMMA et partenaires d'appui",
  "organizer": "Fondation pour les Aires Protégées et la Biodiversité de Madagascar (FAPBM), en collaboration avec l’Institut Halieutique et des Sciences Marines (IH.SM) – Université de Toliara",
  "contactName": "David Jean-Marie",
  "contactEmail": "david.ihsm@gmail.com ",
  "deadline": "15 Novembre 2026",
  "estimatedTime": "45 à 75 min selon les volets",
  "appsScriptUrl": "https://script.google.com/macros/s/AKfycbzmr1Yoa3bKhIFp0w96agyDtx6bPybO1nhbvPOOJ04q87qvxuDcSvsQ868CsFC0mtIqlw/exec",
  "logos": [
    {
      "src": "assets/img/logos/ihsm.png",
      "alt": "IH.SM — Université de Toliara",
      "url": "https://ihsm.mg/"
    },
    {
      "src": "assets/img/logos/fapbm.png",
      "alt": "FAPBM",
      "url": "https://www.fapbm.org/en/home/"
    }
  ],
  "intro": [
    "Cette enquête s'intéresse à la manière dont les savoirs écologiques locaux sur la mer — cycles des espèces, saisons de pêche, noms de lieux, engins traditionnels, dina et fady, sites sacrés — sont recueillis, conservés et utilisés dans la gestion des aires marines à Madagascar, ainsi qu'aux dispositifs de suivi écologique en place.",
    "Ce questionnaire s'adresse aux gestionnaires d'aires marines protégées (AMP), de LMMA et aux structures qui les appuient. Les volets thématiques (mangroves, herbiers, récifs, pêche) ne s'affichent que si votre structure est concernée.",
    "Une réponse par aire gérée ou appuyée."
  ],
   "draftNote": "Vos réponses sont enregistrées automatiquement sur cet appareil : vous pouvez interrompre la saisie et la reprendre plus tard depuis le même navigateur.",
  "privacy": "Les informations recueillies servent uniquement à cette étude. Les résultats seront présentés de manière agrégée ; vous ne serez cité(e) nommément qu'avec votre accord. Les documents transmis ne seront pas diffusés sans l'autorisation de votre structure.",
  "consentLabel": "J'accepte de participer à cette enquête et que les informations fournies soient utilisées dans le cadre de cette étude, selon les conditions décrites ci-dessus.",
  "heroPhoto": "pirogues-voile",
  "introPhotos": [
    "vezo-pirogue",
    "femmes-filet",
    "mangrove-belo"
  ],
  "thanksPhoto": "retour-peche",
  "photoCreditNote": "Photographies : Wikimedia Commons (Rod Waddington, Boosha Afrikaf, Cactus0625, Pascale Bireaud, Laure Borel, Vaido Otsar, Heinonlein, Dennis Tang, Marie Salichon, Diego Delso), licences CC BY-SA 2.0 / 4.0 — crédits détaillés sur chaque photo."
},

  PHOTOS: [
  {
    "key": "pirogues-voile",
    "src": "assets/img/photos/pirogues-voile.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fishing_Pirogues_%2828238012392%29.jpg/1280px-Fishing_Pirogues_%2828238012392%29.jpg",
    "caption": "",
    "credit": "Rod Waddington",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Fishing_Pirogues_%2828238012392%29.jpg"
  },
  {
    "key": "vezo-pirogue",
    "src": "assets/img/photos/vezo-pirogue.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Vezo_%C3%A0_la_p%C3%AAche.JPG/1280px-Vezo_%C3%A0_la_p%C3%AAche.JPG",
    "caption": "",
    "credit": "Boosha Afrikaf",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Vezo_%C3%A0_la_p%C3%AAche.JPG"
  },
  {
    "key": "femmes-filet",
    "src": "assets/img/photos/femmes-filet.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Women_Net_Fishing%2C_Madagascar_%2822075000623%29.jpg/1280px-Women_Net_Fishing%2C_Madagascar_%2822075000623%29.jpg",
    "caption": "",
    "credit": "Rod Waddington",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Women_Net_Fishing%2C_Madagascar_%2822075000623%29.jpg"
  },
  {
    "key": "estran-belo",
    "src": "assets/img/photos/estran-belo.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/P%C3%AAche_Belo_sur_mer%2C_Madagascar.jpg/1280px-P%C3%AAche_Belo_sur_mer%2C_Madagascar.jpg",
    "caption": "",
    "credit": "Cactus0625",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:P%C3%AAche_Belo_sur_mer%2C_Madagascar.jpg"
  },
  {
    "key": "pirogue",
    "src": "assets/img/photos/pirogue.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Fishing_Pirogue%2C_Madagascar_%2827644458115%29.jpg/1280px-Fishing_Pirogue%2C_Madagascar_%2827644458115%29.jpg",
    "caption": "",
    "credit": "Rod Waddington",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Fishing_Pirogue%2C_Madagascar_%2827644458115%29.jpg"
  },
  {
    "key": "filets",
    "src": "assets/img/photos/filets.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/P%C3%AAcheur_%28_pr%C3%A9paration_des_filets_%29.jpg/1280px-P%C3%AAcheur_%28_pr%C3%A9paration_des_filets_%29.jpg",
    "caption": "",
    "credit": "Pascale Bireaud",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:P%C3%AAcheur_%28_pr%C3%A9paration_des_filets_%29.jpg"
  },
  {
    "key": "nasses",
    "src": "assets/img/photos/nasses.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Fish_Traps%2C_Madagascar_%28in_Explore%29_-_Flickr_-_Rod_Waddington.jpg/1280px-Fish_Traps%2C_Madagascar_%28in_Explore%29_-_Flickr_-_Rod_Waddington.jpg",
    "caption": "",
    "credit": "Rod Waddington",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Fish_Traps%2C_Madagascar_%28in_Explore%29_-_Flickr_-_Rod_Waddington.jpg"
  },
  {
    "key": "retour-peche",
    "src": "assets/img/photos/retour-peche.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Retour_de_la_p%C3%AAche.jpg/1280px-Retour_de_la_p%C3%AAche.jpg",
    "caption": "",
    "credit": "Laure Borel",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Retour_de_la_p%C3%AAche.jpg"
  },
  {
    "key": "estran-pirogues",
    "src": "assets/img/photos/estran-pirogues.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tous_partis.jpg/1280px-Tous_partis.jpg",
    "caption": "",
    "credit": "Pascale Bireaud",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Tous_partis.jpg"
  },
  {
    "key": "senne-morondava",
    "src": "assets/img/photos/senne-morondava.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fishing_in_Morondava_2023_01.jpg/1280px-Fishing_in_Morondava_2023_01.jpg",
    "caption": "",
    "credit": "Vaido Otsar",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Fishing_in_Morondava_2023_01.jpg"
  },
  {
    "key": "village-mangily",
    "src": "assets/img/photos/village-mangily.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Vezo%2C_Mangily_15.JPG/1280px-Vezo%2C_Mangily_15.JPG",
    "caption": "",
    "credit": "Heinonlein",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Vezo%2C_Mangily_15.JPG"
  },
  {
    "key": "mangrove-belo",
    "src": "assets/img/photos/mangrove-belo.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mangroves_%2C_Belo_sur_mer%2C_Madagascar.jpg/1280px-Mangroves_%2C_Belo_sur_mer%2C_Madagascar.jpg",
    "caption": "",
    "credit": "Cactus0625",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Mangroves_%2C_Belo_sur_mer%2C_Madagascar.jpg"
  },
  {
    "key": "mangrove-andavadoaka",
    "src": "assets/img/photos/mangrove-andavadoaka.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Andavadoaka_10.jpg",
    "caption": "",
    "credit": "Dennis Tang",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Andavadoaka_10.jpg"
  },
  {
    "key": "lagon-anakao",
    "src": "assets/img/photos/lagon-anakao.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Anakao_South_of_Madagascar.jpg",
    "caption": "",
    "credit": "Marie Salichon",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Anakao_South_of_Madagascar.jpg"
  },
  {
    "key": "recif-acropora",
    "src": "assets/img/photos/recif-acropora.jpg",
    "remote": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coral_%28Acropora_clathrata%29%2C_Nosy_Iranja%2C_Madagascar%2C_2025-09-17%2C_DD_53.jpg/1280px-Coral_%28Acropora_clathrata%29%2C_Nosy_Iranja%2C_Madagascar%2C_2025-09-17%2C_DD_53.jpg",
    "caption": "",
    "credit": "Diego Delso",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Coral_%28Acropora_clathrata%29%2C_Nosy_Iranja%2C_Madagascar%2C_2025-09-17%2C_DD_53.jpg"
  }
],

  STEPS: [
  {
    "key": "ID",
    "title": "Identification de la structure",
    "short": "Identification",
    "photo": "village-mangily",
    "questions": [
      {
        "id": "id_structure",
        "n": "i1",
        "label": "Nom de la structure (organisation / institution)",
        "type": "text",
        "required": true
      },
      {
        "id": "id_aire",
        "n": "i2",
        "label": "Nom de l'aire marine gérée ou appuyée (AMP, LMMA…) et localisation",
        "type": "text",
        "required": true,
        "help": "Ex. : LMMA Velondriake, district de Morombe"
      },
      {
        "id": "id_repondant",
        "n": "i3",
        "label": "Nom et prénom(s) du répondant",
        "type": "text",
        "required": false
      },
      {
        "id": "id_email",
        "n": "i4",
        "label": "Adresse e-mail (pour vous recontacter si besoin)",
        "type": "email",
        "required": false
      },
      {
        "id": "id_citation",
        "n": "i5",
        "label": "Acceptez-vous d'être cité(e) nommément dans les résultats ?",
        "type": "radio",
        "required": true,
        "options": [
          "Oui",
          "Non (cité sous la fonction ou de manière anonyme)"
        ]
      }
    ],
    "eyebrow": "Avant de commencer"
  },
  {
    "key": "0",
    "title": "Cadrage",
    "short": "Cadrage",
    "photo": "pirogues-voile",
    "questions": [
      {
        "id": "q001",
        "n": 1,
        "label": "Quelle est votre fonction, depuis quand, et quel est le périmètre de l'aire que vous gérez ou appuyez ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q002",
        "n": 2,
        "label": "Quel est le modèle de gestion ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "AMP",
          "LMMA",
          "Transfert de gestion",
          "Cogestion",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q003",
        "n": 3,
        "label": "Qui sont les partenaires ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q004",
        "n": 4,
        "label": "Pour vous, que recouvre l'expression « savoirs traditionnels sur la mer » ou « connaissances locales » ?",
        "required": true,
        "type": "textarea"
      }
    ]
  },
  {
    "key": "D1",
    "title": "Couverture thématique des savoirs locaux",
    "short": "Couverture thématique",
    "photo": "nasses",
    "questions": [
      {
        "id": "q005",
        "n": 5,
        "label": "Quels types de savoirs locaux votre structure a-t-elle déjà recueillis ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Cycle des espèces",
          "Saisons de pêche",
          "Habitats et noms de lieux",
          "Engins traditionnels",
          "Dina et fady",
          "Sites sacrés",
          "Signes annonciateurs du temps ou de l'abondance",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q006",
        "n": 6,
        "label": "Quels savoirs n'avez-vous jamais recueillis, et pourquoi ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q007",
        "n": 7,
        "label": "Les savoirs des femmes sur l'estran et les invertébrés ont-ils été recueillis ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q008",
        "n": 8,
        "label": "Si oui, par quel moyen ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q007",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "D2",
    "title": "Méthodes et outils de collecte",
    "short": "Méthodes et outils",
    "photo": "filets",
    "questions": [
      {
        "id": "q009",
        "n": 9,
        "label": "Décrivez la dernière collecte de savoirs locaux réalisée",
        "required": true,
        "type": "grid",
        "rows": [
          {
            "key": "annee",
            "label": "Année",
            "type": "year"
          },
          {
            "key": "objectif",
            "label": "Objectif",
            "type": "text"
          },
          {
            "key": "outil",
            "label": "Outil utilisé",
            "type": "text"
          },
          {
            "key": "duree",
            "label": "Durée",
            "type": "text"
          },
          {
            "key": "nb_personnes",
            "label": "Nombre de personnes enquêtées",
            "type": "number"
          }
        ]
      },
      {
        "id": "q010",
        "n": 10,
        "label": "Existe-t-il un protocole ou un guide écrit pour la collecte ? Pouvez-vous nous le transmettre ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui — document transmis avec ce questionnaire",
          "Oui — sera transmis ultérieurement",
          "N'existe pas"
        ],
        "other": false,
        "help": "Les documents peuvent être joints à la dernière étape du questionnaire."
      },
      {
        "id": "q011",
        "n": 11,
        "label": "Dans quelle langue la collecte est-elle faite, et dans quelle langue est-elle consignée ?",
        "required": true,
        "type": "grid",
        "rows": [
          {
            "key": "collecte",
            "label": "Langue de collecte",
            "type": "text"
          },
          {
            "key": "consignation",
            "label": "Langue de consignation",
            "type": "text"
          }
        ]
      },
      {
        "id": "q012",
        "n": 12,
        "label": "Qui mène les enquêtes ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Personnel permanent",
          "Consultant",
          "Étudiant",
          "Membre de la communauté",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q013",
        "n": 13,
        "label": "Quelle formation ont-ils reçue ?",
        "required": false,
        "type": "textarea"
      },
      {
        "id": "q014",
        "n": 14,
        "label": "La collecte est-elle ponctuelle, liée à un projet, ou continue ?",
        "required": true,
        "type": "radio",
        "options": [
          "Ponctuelle",
          "Liée à un projet",
          "Continue"
        ]
      },
      {
        "id": "q015",
        "n": 15,
        "label": "Quand a eu lieu la précédente collecte ? (année)",
        "required": false,
        "type": "year"
      }
    ]
  },
  {
    "key": "D3",
    "title": "Détenteurs des savoirs et représentativité",
    "short": "Détenteurs et représentativité",
    "photo": "femmes-filet",
    "questions": [
      {
        "id": "q016",
        "n": 16,
        "label": "Comment choisissez-vous les personnes à interroger ? Qui fait ce choix ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q017",
        "n": 17,
        "label": "Quels groupes sont inclus dans la collecte ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Femmes",
          "Jeunes",
          "Migrants",
          "Pratiquants minoritaires (plongeurs, collectrices de poulpe, etc.)",
          "Aucun de ces groupes"
        ]
      },
      {
        "id": "q018",
        "n": 18,
        "label": "Comment ces groupes sont-ils inclus ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q017",
          "notOnly": "Aucun de ces groupes"
        }
      },
      {
        "id": "q019",
        "n": 19,
        "label": "Selon vous, qui sont les personnes du village qui connaissent le mieux la mer ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q020",
        "n": 20,
        "label": "Ces personnes ont-elles été interrogées ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "En partie",
          "Non",
          "Ne sait pas"
        ]
      }
    ]
  },
  {
    "key": "D4",
    "title": "Transmission et pérennité",
    "short": "Transmission",
    "photo": "vezo-pirogue",
    "questions": [
      {
        "id": "q021",
        "n": 21,
        "label": "Observez-vous une perte de ces savoirs chez les jeunes ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q022",
        "n": 22,
        "label": "Si oui, sur quels sujets ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q021",
          "eq": "Oui"
        }
      },
      {
        "id": "q023",
        "n": 23,
        "label": "Votre structure appuie-t-elle une initiative de transmission ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Aucune",
          "École",
          "Club",
          "Rituel",
          "Fête",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q024",
        "n": 24,
        "label": "Les données recueillies sont-elles mises à jour ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ]
      },
      {
        "id": "q025",
        "n": 25,
        "label": "Si oui, à quelle fréquence ?",
        "required": false,
        "type": "text",
        "showIf": {
          "q": "q024",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "D5",
    "title": "Validation et fiabilité",
    "short": "Validation et fiabilité",
    "photo": "retour-peche",
    "questions": [
      {
        "id": "q026",
        "n": 26,
        "label": "Les résultats ont-ils été restitués aux informateurs avant utilisation ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q027",
        "n": 27,
        "label": "Si oui, sous quelle forme ?",
        "required": false,
        "type": "text",
        "showIf": {
          "q": "q026",
          "eq": "Oui"
        }
      },
      {
        "id": "q028",
        "n": 28,
        "label": "Existe-t-il un compte rendu de restitution ? Pouvez-vous nous le transmettre ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui — document transmis avec ce questionnaire",
          "Oui — sera transmis ultérieurement",
          "N'existe pas"
        ],
        "other": false,
        "showIf": {
          "q": "q026",
          "eq": "Oui"
        }
      },
      {
        "id": "q029",
        "n": 29,
        "label": "Comment traitez-vous les désaccords entre informateurs ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q030",
        "n": 30,
        "label": "Les savoirs recueillis ont-ils été comparés à des données scientifiques (suivis, débarquements) ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q031",
        "n": 31,
        "label": "Si oui, avec quel résultat ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q030",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "D6",
    "title": "Archivage, accès et gouvernance des données",
    "short": "Archivage et gouvernance",
    "photo": "estran-pirogues",
    "questions": [
      {
        "id": "q032",
        "n": 32,
        "label": "Où sont conservées les données sur les savoirs locaux ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Papier",
          "Excel",
          "Base de données",
          "SIG",
          "Audio",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q033",
        "n": 33,
        "label": "Pouvez-vous nous transmettre ce fichier (ou un extrait) ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui — document transmis avec ce questionnaire",
          "Oui — sera transmis ultérieurement",
          "N'existe pas"
        ],
        "other": false
      },
      {
        "id": "q034",
        "n": 34,
        "label": "À qui appartiennent ces données ?",
        "required": true,
        "type": "text"
      },
      {
        "id": "q035",
        "n": 35,
        "label": "Existe-t-il un accord écrit avec la communauté ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q036",
        "n": 36,
        "label": "Comment le consentement a-t-il été recueilli ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q037",
        "n": 37,
        "label": "Le consentement est-il consigné ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q038",
        "n": 38,
        "label": "Comment traitez-vous les savoirs sacrés ou réservés ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q039",
        "n": 39,
        "label": "La communauté a-t-elle une copie ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q040",
        "n": 40,
        "label": "Si oui, dans quelle langue et sous quelle forme ?",
        "required": false,
        "type": "text",
        "showIf": {
          "q": "q039",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "D7",
    "title": "Intégration dans la gestion",
    "short": "Intégration dans la gestion",
    "photo": "senne-morondava",
    "questions": [
      {
        "id": "q041",
        "n": 41,
        "label": "Citez une décision de gestion fondée sur un savoir local",
        "required": true,
        "type": "textarea",
        "help": "Ex. : zonage, fermeture temporaire, dina, règle d'engin"
      },
      {
        "id": "q042",
        "n": 42,
        "label": "Où cette origine (le savoir local) est-elle écrite ?",
        "required": true,
        "type": "text",
        "help": "Ex. : plan d'aménagement et de gestion (PAG), dina, compte rendu de réunion… Indiquer « nulle part » si elle n'est pas écrite."
      },
      {
        "id": "q043",
        "n": 43,
        "label": "Les savoirs locaux figurent-ils dans vos indicateurs de suivi ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ]
      },
      {
        "id": "q044",
        "n": 44,
        "label": "Si oui, lesquels ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q043",
          "eq": "Oui"
        }
      },
      {
        "id": "q045",
        "n": 45,
        "label": "Lorsqu'un savoir local contredit une donnée scientifique, laquelle l'emporte dans la décision ?",
        "required": true,
        "type": "radio",
        "options": [
          "Le savoir local",
          "La donnée scientifique",
          "Cela dépend (préciser)"
        ],
        "other": true
      }
    ]
  },
  {
    "key": "S1",
    "title": "Informations générales sur l'AMP et le suivi",
    "short": "AMP et suivi",
    "photo": "pirogue",
    "questions": [
      {
        "id": "q046",
        "n": 46,
        "label": "Quelle est la catégorie de l'Aire Marine Protégée (AMP) concernée par cette enquête ?",
        "required": true,
        "type": "text",
        "help": "Ex. : 2, 4, 5, etc.",
        "showIf": {
          "q": "q002",
          "any": [
            "AMP"
          ]
        }
      },
      {
        "id": "q047",
        "n": 47,
        "label": "Quelle est la superficie estimée pour chaque type d'écosystème présent ?",
        "required": true,
        "type": "grid",
        "rows": [
          {
            "key": "recif",
            "label": "Récif",
            "type": "number"
          },
          {
            "key": "herbier",
            "label": "Herbier",
            "type": "number"
          },
          {
            "key": "mangrove",
            "label": "Mangrove",
            "type": "number"
          }
        ],
        "units": [
          "ha",
          "km²"
        ]
      },
      {
        "id": "q048",
        "n": 48,
        "label": "Quels sont les partenaires techniques qui collaborent avec vous pour le suivi ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "IHSM",
          "CNRO",
          "CNRE",
          "WWF",
          "CI",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q049",
        "n": 49,
        "label": "Combien de personnes sont impliquées lors de la réalisation du suivi ?",
        "required": true,
        "type": "number",
        "min": 0
      },
      {
        "id": "q050",
        "n": 50,
        "label": "Quel est le budget annuel alloué pour le suivi ?",
        "required": false,
        "type": "text",
        "help": "Indiquer une fourchette de prix"
      },
      {
        "id": "q051",
        "n": 51,
        "label": "Quelle est la fréquence annuelle de réalisation du suivi ?",
        "required": true,
        "type": "number",
        "min": 0,
        "help": "Nombre de suivis par an"
      },
      {
        "id": "q052",
        "n": 52,
        "label": "Qui réalise concrètement le suivi sur le terrain ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Bénévoles",
          "Équipe technique",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q053",
        "n": 53,
        "label": "L'équipe en charge du suivi a-t-elle reçu une formation spécifique ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ]
      },
      {
        "id": "q054",
        "n": 54,
        "label": "Si oui, où et sur quels thèmes ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q053",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "S2",
    "title": "Outils, données et contraintes",
    "short": "Outils et contraintes",
    "photo": "lagon-anakao",
    "questions": [
      {
        "id": "q055",
        "n": 55,
        "label": "Utilisez-vous un logiciel ou une application pour la collecte et l'analyse de vos données ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ]
      },
      {
        "id": "q056",
        "n": 56,
        "label": "Si oui, lequel / laquelle ?",
        "required": false,
        "type": "text",
        "showIf": {
          "q": "q055",
          "eq": "Oui"
        }
      },
      {
        "id": "q057",
        "n": 57,
        "label": "Partagez-vous vos données avec d'autres organisations ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ]
      },
      {
        "id": "q058",
        "n": 58,
        "label": "Quelles sont les principales contraintes rencontrées lors du suivi ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Manque de financement",
          "Manque de personnel formé",
          "Manque de matériel",
          "Conditions météorologiques",
          "Accès difficile aux sites",
          "Manque de coordination",
          "Absence de protocole standard",
          "Autre"
        ],
        "other": true
      }
    ]
  },
  {
    "key": "V",
    "title": "Choix des volets thématiques",
    "short": "Choix des volets",
    "photo": "estran-belo",
    "questions": [
      {
        "id": "q059",
        "n": 59,
        "label": "Quels écosystèmes ou ressources votre structure suit-elle ou gère-t-elle ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Mangroves",
          "Herbiers marins",
          "Récifs coralliens",
          "Pêche"
        ],
        "help": "Seuls les volets cochés vous seront ensuite proposés."
      }
    ],
    "eyebrow": "Volets thématiques"
  },
  {
    "key": "V1a",
    "title": "Mangroves — suivi",
    "short": "Suivi",
    "group": "Volet Mangroves",
    "photo": "mangrove-belo",
    "showIf": {
      "q": "q059",
      "any": [
        "Mangroves"
      ]
    },
    "questions": [
      {
        "id": "q060",
        "n": 60,
        "label": "Réalisez-vous un suivi écologique des mangroves ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Auparavant, mais plus actuellement"
        ]
      },
      {
        "id": "q061",
        "n": 61,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q060",
          "eq": "Non"
        }
      },
      {
        "id": "q062",
        "n": 62,
        "label": "Période de suivi (mois ou saison de réalisation)",
        "required": true,
        "type": "text",
        "help": "Ex. : saison sèche, avril–mai, marée de vives-eaux…",
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q063",
        "n": 63,
        "label": "Fréquence du suivi",
        "required": true,
        "type": "radio",
        "options": [
          "Mensuelle",
          "Trimestrielle",
          "Semestrielle",
          "Annuelle",
          "Tous les 2 ans",
          "Irrégulière / selon projet",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q064",
        "n": 64,
        "label": "Depuis quelle année ce suivi est-il réalisé ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q065",
        "n": 65,
        "label": "Budget alloué pour une campagne de suivi",
        "required": true,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q066",
        "n": 66,
        "label": "Le suivi est-il participatif ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "En partie",
          "Non"
        ],
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q067",
        "n": 67,
        "label": "Si oui, qui participe ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Communauté de base (VOI / COBA)",
          "Association de pêcheurs",
          "Comité local de gestion / CLP",
          "Femmes / collectrices",
          "Jeunes",
          "Écoles",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q066",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q068",
        "n": 68,
        "label": "Rôle de la communauté dans le suivi",
        "required": false,
        "type": "checkbox",
        "options": [
          "Collecte des données sur le terrain",
          "Saisie des données",
          "Analyse",
          "Restitution / diffusion des résultats",
          "Prise de décision de gestion",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q066",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q069",
        "n": 69,
        "label": "Les participants communautaires ont-ils reçu une formation ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ],
        "showIf": {
          "q": "q066",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q070",
        "n": 70,
        "label": "Quelle(s) méthode(s) utilisez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Placettes permanentes",
          "Transects",
          "Quadrats",
          "Point-centré quadrat (PCQM)",
          "Télédétection / images satellitaires",
          "Drone",
          "Comptage de souches (suivi des coupes)",
          "Méthode participative",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q071",
        "n": 71,
        "label": "Quels indices ou variables écologiques mesurez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Densité des arbres",
          "Composition spécifique",
          "Diamètre (DHP)",
          "Hauteur",
          "Surface terrière",
          "Régénération (plantules, propagules)",
          "Taux de coupe / souches",
          "Superficie / couvert",
          "Biomasse / stock de carbone",
          "Faune associée (crabes, oiseaux…)",
          "Salinité / paramètres physico-chimiques",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q072",
        "n": 72,
        "label": "Combien de sites / stations sont suivis par campagne ?",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      },
      {
        "id": "q073",
        "n": 73,
        "label": "Les résultats sont-ils restitués à la communauté ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Parfois"
        ],
        "showIf": {
          "q": "q060",
          "ne": "Non"
        }
      }
    ]
  },
  {
    "key": "V1b",
    "title": "Mangroves — restauration",
    "short": "Restauration",
    "group": "Volet Mangroves",
    "photo": "mangrove-andavadoaka",
    "showIf": {
      "q": "q059",
      "any": [
        "Mangroves"
      ]
    },
    "questions": [
      {
        "id": "q074",
        "n": 74,
        "label": "Réalisez-vous des actions de restauration des mangroves ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Prévu / en projet"
        ]
      },
      {
        "id": "q075",
        "n": 75,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Manque de financement",
          "Manque de compétences techniques",
          "Manque de matériel ou de plants",
          "Non prioritaire",
          "Pas nécessaire (écosystème en bon état)",
          "Échecs passés",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q074",
          "eq": "Non"
        }
      },
      {
        "id": "q076",
        "n": 76,
        "label": "Si oui, depuis quelle année ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q074",
          "eq": "Oui"
        }
      },
      {
        "id": "q077",
        "n": 77,
        "label": "Surface restaurée à ce jour",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q074",
          "eq": "Oui"
        },
        "units": [
          "ha",
          "m²"
        ]
      },
      {
        "id": "q078",
        "n": 78,
        "label": "Surface ciblée par les actions en cours ou prévues",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q074",
          "any": [
            "Oui",
            "Prévu / en projet"
          ]
        },
        "units": [
          "ha",
          "m²"
        ]
      },
      {
        "id": "q079",
        "n": 79,
        "label": "Espèces ciblées",
        "required": false,
        "type": "checkbox",
        "options": [
          "Rhizophora mucronata",
          "Ceriops tagal",
          "Bruguiera gymnorrhiza",
          "Avicennia marina",
          "Sonneratia alba",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q074",
          "eq": "Oui"
        }
      },
      {
        "id": "q080",
        "n": 80,
        "label": "Technique ou méthode de restauration utilisée",
        "required": false,
        "type": "checkbox",
        "options": [
          "Plantation directe de propagules",
          "Pépinière puis transplantation",
          "Régénération naturelle assistée",
          "Restauration hydrologique (réouverture de chenaux)",
          "Semis direct",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q074",
          "eq": "Oui"
        }
      },
      {
        "id": "q081",
        "n": 81,
        "label": "Taux de survie ou de réussite observé",
        "required": false,
        "type": "text",
        "help": "En % si disponible",
        "showIf": {
          "q": "q074",
          "eq": "Oui"
        }
      },
      {
        "id": "q082",
        "n": 82,
        "label": "Budget alloué pour la restauration",
        "required": false,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q074",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "V1c",
    "title": "Mangroves — harmonisation et recommandations",
    "short": "Harmonisation",
    "group": "Volet Mangroves",
    "photo": "mangrove-belo",
    "showIf": {
      "q": "q059",
      "any": [
        "Mangroves"
      ]
    },
    "questions": [
      {
        "id": "q083",
        "n": 83,
        "label": "Quels sont vos besoins prioritaires pour améliorer le suivi ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Formation",
          "Financement",
          "Matériel",
          "Protocole standardisé",
          "Appui technique",
          "Base de données commune",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q084",
        "n": 84,
        "label": "Pensez-vous qu'une harmonisation nationale des protocoles est nécessaire ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q085",
        "n": 85,
        "label": "Quels critères sont importants pour un protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Simplicité",
          "Coût abordable",
          "Reproductibilité",
          "Adaptabilité locale",
          "Compatibilité internationale",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q086",
        "n": 86,
        "label": "Seriez-vous prêt à adopter un protocole national harmonisé ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être",
          "Sous conditions"
        ]
      },
      {
        "id": "q087",
        "n": 87,
        "label": "Si sous conditions, lesquelles ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q086",
          "eq": "Sous conditions"
        }
      },
      {
        "id": "q088",
        "n": 88,
        "label": "Quelles méthodes recommandez-vous pour un futur protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Placettes permanentes",
          "Transects",
          "Quadrats",
          "Point-centré quadrat (PCQM)",
          "Télédétection / images satellitaires",
          "Drone",
          "Comptage de souches (suivi des coupes)",
          "Méthode participative",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q089",
        "n": 89,
        "label": "Souhaitez-vous participer à l'élaboration du protocole national ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être"
        ]
      }
    ]
  },
  {
    "key": "V2a",
    "title": "Herbiers marins — suivi",
    "short": "Suivi",
    "group": "Volet Herbiers marins",
    "photo": "lagon-anakao",
    "showIf": {
      "q": "q059",
      "any": [
        "Herbiers marins"
      ]
    },
    "questions": [
      {
        "id": "q090",
        "n": 90,
        "label": "Réalisez-vous un suivi écologique des herbiers ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Auparavant, mais plus actuellement"
        ]
      },
      {
        "id": "q091",
        "n": 91,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q090",
          "eq": "Non"
        }
      },
      {
        "id": "q092",
        "n": 92,
        "label": "Période de suivi (mois ou saison de réalisation)",
        "required": true,
        "type": "text",
        "help": "Ex. : saison sèche, avril–mai, marée de vives-eaux…",
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q093",
        "n": 93,
        "label": "Fréquence du suivi",
        "required": true,
        "type": "radio",
        "options": [
          "Mensuelle",
          "Trimestrielle",
          "Semestrielle",
          "Annuelle",
          "Tous les 2 ans",
          "Irrégulière / selon projet",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q094",
        "n": 94,
        "label": "Depuis quelle année ce suivi est-il réalisé ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q095",
        "n": 95,
        "label": "Budget alloué pour une campagne de suivi",
        "required": true,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q096",
        "n": 96,
        "label": "Le suivi est-il participatif ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "En partie",
          "Non"
        ],
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q097",
        "n": 97,
        "label": "Si oui, qui participe ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Communauté de base (VOI / COBA)",
          "Association de pêcheurs",
          "Comité local de gestion / CLP",
          "Femmes / collectrices",
          "Jeunes",
          "Écoles",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q096",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q098",
        "n": 98,
        "label": "Rôle de la communauté dans le suivi",
        "required": false,
        "type": "checkbox",
        "options": [
          "Collecte des données sur le terrain",
          "Saisie des données",
          "Analyse",
          "Restitution / diffusion des résultats",
          "Prise de décision de gestion",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q096",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q099",
        "n": 99,
        "label": "Les participants communautaires ont-ils reçu une formation ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ],
        "showIf": {
          "q": "q096",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q100",
        "n": 100,
        "label": "Quelle(s) méthode(s) utilisez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Seagrass-Watch",
          "SeagrassNet",
          "Transect–quadrat",
          "Photo-quadrats",
          "Points d'observation / Points intercepts",
          "Télédétection / drone",
          "Méthode participative",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q101",
        "n": 101,
        "label": "Quels indices ou variables écologiques mesurez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Pourcentage de couverture",
          "Composition spécifique",
          "Densité des pousses",
          "Hauteur de canopée",
          "Biomasse",
          "Épiphytes / algues",
          "Type de sédiment",
          "Macrofaune associée",
          "Traces de broutage (tortues, dugongs)",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q102",
        "n": 102,
        "label": "Combien de sites / stations sont suivis par campagne ?",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      },
      {
        "id": "q103",
        "n": 103,
        "label": "Les résultats sont-ils restitués à la communauté ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Parfois"
        ],
        "showIf": {
          "q": "q090",
          "ne": "Non"
        }
      }
    ]
  },
  {
    "key": "V2b",
    "title": "Herbiers marins — restauration",
    "short": "Restauration",
    "group": "Volet Herbiers marins",
    "photo": "estran-belo",
    "showIf": {
      "q": "q059",
      "any": [
        "Herbiers marins"
      ]
    },
    "questions": [
      {
        "id": "q104",
        "n": 104,
        "label": "Réalisez-vous des actions de restauration des herbiers ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Prévu / en projet"
        ]
      },
      {
        "id": "q105",
        "n": 105,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Manque de financement",
          "Manque de compétences techniques",
          "Manque de matériel ou de plants",
          "Non prioritaire",
          "Pas nécessaire (écosystème en bon état)",
          "Échecs passés",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q104",
          "eq": "Non"
        }
      },
      {
        "id": "q106",
        "n": 106,
        "label": "Si oui, depuis quelle année ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q104",
          "eq": "Oui"
        }
      },
      {
        "id": "q107",
        "n": 107,
        "label": "Surface restaurée à ce jour",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q104",
          "eq": "Oui"
        },
        "units": [
          "ha",
          "m²"
        ]
      },
      {
        "id": "q108",
        "n": 108,
        "label": "Surface ciblée par les actions en cours ou prévues",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q104",
          "any": [
            "Oui",
            "Prévu / en projet"
          ]
        },
        "units": [
          "ha",
          "m²"
        ]
      },
      {
        "id": "q109",
        "n": 109,
        "label": "Espèces ciblées",
        "required": false,
        "type": "checkbox",
        "options": [
          "Thalassia hemprichii",
          "Thalassodendron ciliatum",
          "Cymodocea spp.",
          "Halodule spp.",
          "Syringodium isoetifolium",
          "Zostera capensis",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q104",
          "eq": "Oui"
        }
      },
      {
        "id": "q110",
        "n": 110,
        "label": "Technique ou méthode de restauration utilisée",
        "required": false,
        "type": "checkbox",
        "options": [
          "Transplantation de mottes (sods)",
          "Transplantation de pousses ancrées (plugs / sprigs)",
          "Semis de graines",
          "Structures ou cadres de fixation",
          "Restauration passive (réduction des pressions)",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q104",
          "eq": "Oui"
        }
      },
      {
        "id": "q111",
        "n": 111,
        "label": "Taux de survie ou de réussite observé",
        "required": false,
        "type": "text",
        "help": "En % si disponible",
        "showIf": {
          "q": "q104",
          "eq": "Oui"
        }
      },
      {
        "id": "q112",
        "n": 112,
        "label": "Budget alloué pour la restauration",
        "required": false,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q104",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "V2c",
    "title": "Herbiers marins — harmonisation et recommandations",
    "short": "Harmonisation",
    "group": "Volet Herbiers marins",
    "photo": "lagon-anakao",
    "showIf": {
      "q": "q059",
      "any": [
        "Herbiers marins"
      ]
    },
    "questions": [
      {
        "id": "q113",
        "n": 113,
        "label": "Quels sont vos besoins prioritaires pour améliorer le suivi ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Formation",
          "Financement",
          "Matériel",
          "Protocole standardisé",
          "Appui technique",
          "Base de données commune",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q114",
        "n": 114,
        "label": "Pensez-vous qu'une harmonisation nationale des protocoles est nécessaire ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q115",
        "n": 115,
        "label": "Quels critères sont importants pour un protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Simplicité",
          "Coût abordable",
          "Reproductibilité",
          "Adaptabilité locale",
          "Compatibilité internationale",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q116",
        "n": 116,
        "label": "Seriez-vous prêt à adopter un protocole national harmonisé ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être",
          "Sous conditions"
        ]
      },
      {
        "id": "q117",
        "n": 117,
        "label": "Si sous conditions, lesquelles ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q116",
          "eq": "Sous conditions"
        }
      },
      {
        "id": "q118",
        "n": 118,
        "label": "Quelles méthodes recommandez-vous pour un futur protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Seagrass-Watch",
          "SeagrassNet",
          "Transect–quadrat",
          "Photo-quadrats",
          "Points d'observation / Points intercepts",
          "Télédétection / drone",
          "Méthode participative",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q119",
        "n": 119,
        "label": "Souhaitez-vous participer à l'élaboration du protocole national ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être"
        ]
      }
    ]
  },
  {
    "key": "V3a",
    "title": "Récifs coralliens — suivi",
    "short": "Suivi",
    "group": "Volet Récifs coralliens",
    "photo": "recif-acropora",
    "showIf": {
      "q": "q059",
      "any": [
        "Récifs coralliens"
      ]
    },
    "questions": [
      {
        "id": "q120",
        "n": 120,
        "label": "Réalisez-vous un suivi écologique des récifs ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Auparavant, mais plus actuellement"
        ]
      },
      {
        "id": "q121",
        "n": 121,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q120",
          "eq": "Non"
        }
      },
      {
        "id": "q122",
        "n": 122,
        "label": "Période de suivi (mois ou saison de réalisation)",
        "required": true,
        "type": "text",
        "help": "Ex. : saison sèche, avril–mai, marée de vives-eaux…",
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q123",
        "n": 123,
        "label": "Fréquence du suivi",
        "required": true,
        "type": "radio",
        "options": [
          "Mensuelle",
          "Trimestrielle",
          "Semestrielle",
          "Annuelle",
          "Tous les 2 ans",
          "Irrégulière / selon projet",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q124",
        "n": 124,
        "label": "Depuis quelle année ce suivi est-il réalisé ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q125",
        "n": 125,
        "label": "Budget alloué pour une campagne de suivi",
        "required": true,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q126",
        "n": 126,
        "label": "Le suivi est-il participatif ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "En partie",
          "Non"
        ],
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q127",
        "n": 127,
        "label": "Si oui, qui participe ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Communauté de base (VOI / COBA)",
          "Association de pêcheurs",
          "Comité local de gestion / CLP",
          "Femmes / collectrices",
          "Jeunes",
          "Écoles",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q126",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q128",
        "n": 128,
        "label": "Rôle de la communauté dans le suivi",
        "required": false,
        "type": "checkbox",
        "options": [
          "Collecte des données sur le terrain",
          "Saisie des données",
          "Analyse",
          "Restitution / diffusion des résultats",
          "Prise de décision de gestion",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q126",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q129",
        "n": 129,
        "label": "Les participants communautaires ont-ils reçu une formation ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ],
        "showIf": {
          "q": "q126",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q130",
        "n": 130,
        "label": "Quelle(s) méthode(s) utilisez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "LIT (Line Intercept Transect)",
          "PIT (Point Intercept Transect)",
          "Quadrats",
          "Photo-quadrats",
          "Belt transect / comptage visuel des poissons (UVC)",
          "Comptage des invertébrés",
          "Reef Check",
          "Méthode participative",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q131",
        "n": 131,
        "label": "Quels indices ou variables écologiques mesurez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Couverture en corail vivant",
          "Couverture algale",
          "Blanchissement",
          "Recrutement corallien",
          "Abondance / biomasse des poissons",
          "Invertébrés indicateurs (oursins, holothuries, étoile de mer couronne d'épines)",
          "Maladies coralliennes",
          "Complexité structurale",
          "Température de l'eau",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q132",
        "n": 132,
        "label": "Combien de sites / stations sont suivis par campagne ?",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      },
      {
        "id": "q133",
        "n": 133,
        "label": "Les résultats sont-ils restitués à la communauté ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Parfois"
        ],
        "showIf": {
          "q": "q120",
          "ne": "Non"
        }
      }
    ]
  },
  {
    "key": "V3b",
    "title": "Récifs coralliens — restauration",
    "short": "Restauration",
    "group": "Volet Récifs coralliens",
    "photo": "pirogue",
    "showIf": {
      "q": "q059",
      "any": [
        "Récifs coralliens"
      ]
    },
    "questions": [
      {
        "id": "q134",
        "n": 134,
        "label": "Réalisez-vous des actions de restauration des récifs ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Prévu / en projet"
        ]
      },
      {
        "id": "q135",
        "n": 135,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Manque de financement",
          "Manque de compétences techniques",
          "Manque de matériel ou de plants",
          "Non prioritaire",
          "Pas nécessaire (écosystème en bon état)",
          "Échecs passés",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q134",
          "eq": "Non"
        }
      },
      {
        "id": "q136",
        "n": 136,
        "label": "Si oui, depuis quelle année ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q134",
          "eq": "Oui"
        }
      },
      {
        "id": "q137",
        "n": 137,
        "label": "Surface restaurée à ce jour",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q134",
          "eq": "Oui"
        },
        "units": [
          "ha",
          "m²"
        ]
      },
      {
        "id": "q138",
        "n": 138,
        "label": "Surface ciblée par les actions en cours ou prévues",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q134",
          "any": [
            "Oui",
            "Prévu / en projet"
          ]
        },
        "units": [
          "ha",
          "m²"
        ]
      },
      {
        "id": "q139",
        "n": 139,
        "label": "Types de coraux ciblés",
        "required": false,
        "type": "checkbox",
        "options": [
          "Coraux branchus (Acropora…)",
          "Coraux massifs (Porites…)",
          "Coraux tabulaires",
          "Coraux digités",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q134",
          "eq": "Oui"
        }
      },
      {
        "id": "q140",
        "n": 140,
        "label": "Technique ou méthode de restauration utilisée",
        "required": false,
        "type": "checkbox",
        "options": [
          "Bouturage / jardinage corallien (pépinières)",
          "Transplantation de fragments",
          "Substrats ou récifs artificiels",
          "Micro-fragmentation",
          "Stabilisation du substrat (débris)",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q134",
          "eq": "Oui"
        }
      },
      {
        "id": "q141",
        "n": 141,
        "label": "Taux de survie ou de réussite observé",
        "required": false,
        "type": "text",
        "help": "En % si disponible",
        "showIf": {
          "q": "q134",
          "eq": "Oui"
        }
      },
      {
        "id": "q142",
        "n": 142,
        "label": "Budget alloué pour la restauration",
        "required": false,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q134",
          "eq": "Oui"
        }
      }
    ]
  },
  {
    "key": "V3c",
    "title": "Récifs coralliens — harmonisation et recommandations",
    "short": "Harmonisation",
    "group": "Volet Récifs coralliens",
    "photo": "recif-acropora",
    "showIf": {
      "q": "q059",
      "any": [
        "Récifs coralliens"
      ]
    },
    "questions": [
      {
        "id": "q143",
        "n": 143,
        "label": "Quels sont vos besoins prioritaires pour améliorer le suivi ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Formation",
          "Financement",
          "Matériel",
          "Protocole standardisé",
          "Appui technique",
          "Base de données commune",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q144",
        "n": 144,
        "label": "Pensez-vous qu'une harmonisation nationale des protocoles est nécessaire ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q145",
        "n": 145,
        "label": "Quels critères sont importants pour un protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Simplicité",
          "Coût abordable",
          "Reproductibilité",
          "Adaptabilité locale",
          "Compatibilité internationale",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q146",
        "n": 146,
        "label": "Seriez-vous prêt à adopter un protocole national harmonisé ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être",
          "Sous conditions"
        ]
      },
      {
        "id": "q147",
        "n": 147,
        "label": "Si sous conditions, lesquelles ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q146",
          "eq": "Sous conditions"
        }
      },
      {
        "id": "q148",
        "n": 148,
        "label": "Quelles méthodes recommandez-vous pour un futur protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "LIT (Line Intercept Transect)",
          "PIT (Point Intercept Transect)",
          "Quadrats",
          "Photo-quadrats",
          "Belt transect / comptage visuel des poissons (UVC)",
          "Comptage des invertébrés",
          "Reef Check",
          "Méthode participative",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q149",
        "n": 149,
        "label": "Souhaitez-vous participer à l'élaboration du protocole national ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être"
        ]
      }
    ]
  },
  {
    "key": "V4a",
    "title": "Pêche — suivi",
    "short": "Suivi",
    "group": "Volet Pêche",
    "photo": "retour-peche",
    "showIf": {
      "q": "q059",
      "any": [
        "Pêche"
      ]
    },
    "questions": [
      {
        "id": "q150",
        "n": 150,
        "label": "Réalisez-vous un suivi de la pêche ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Auparavant, mais plus actuellement"
        ]
      },
      {
        "id": "q151",
        "n": 151,
        "label": "Si non, pourquoi ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q150",
          "eq": "Non"
        }
      },
      {
        "id": "q152",
        "n": 152,
        "label": "Période de suivi (mois ou saison de réalisation)",
        "required": true,
        "type": "text",
        "help": "Ex. : saison sèche, avril–mai, marée de vives-eaux…",
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q153",
        "n": 153,
        "label": "Fréquence du suivi",
        "required": true,
        "type": "radio",
        "options": [
          "Mensuelle",
          "Trimestrielle",
          "Semestrielle",
          "Annuelle",
          "Tous les 2 ans",
          "Irrégulière / selon projet",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q154",
        "n": 154,
        "label": "Depuis quelle année ce suivi est-il réalisé ?",
        "required": false,
        "type": "year",
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q155",
        "n": 155,
        "label": "Budget alloué pour une campagne de suivi",
        "required": true,
        "type": "radio",
        "options": [
          "< 5 M Ar",
          "5 – 10 M Ar",
          "10 – 15 M Ar",
          "15 – 20 M Ar",
          "20 – 30 M Ar",
          "> 30 M Ar",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q156",
        "n": 156,
        "label": "Le suivi est-il participatif ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "En partie",
          "Non"
        ],
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q157",
        "n": 157,
        "label": "Si oui, qui participe ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Communauté de base (VOI / COBA)",
          "Association de pêcheurs",
          "Comité local de gestion / CLP",
          "Femmes / collectrices",
          "Jeunes",
          "Écoles",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q156",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q158",
        "n": 158,
        "label": "Rôle de la communauté dans le suivi",
        "required": false,
        "type": "checkbox",
        "options": [
          "Collecte des données sur le terrain",
          "Saisie des données",
          "Analyse",
          "Restitution / diffusion des résultats",
          "Prise de décision de gestion",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q156",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q159",
        "n": 159,
        "label": "Les participants communautaires ont-ils reçu une formation ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non"
        ],
        "showIf": {
          "q": "q156",
          "any": [
            "Oui",
            "En partie"
          ]
        }
      },
      {
        "id": "q160",
        "n": 160,
        "label": "Quelle(s) méthode(s) utilisez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Enquêtes au débarquement",
          "Carnets de pêche",
          "Suivi des captures par la communauté",
          "Échantillonnage biométrique (tailles, poids)",
          "Suivi des réserves temporaires (poulpe…)",
          "Recensement des pêcheurs / pirogues",
          "Enquêtes socio-économiques",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q161",
        "n": 161,
        "label": "Quels indices ou variables écologiques mesurez-vous ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "CPUE (capture par unité d'effort)",
          "Captures totales",
          "Composition spécifique des captures",
          "Taille / poids des individus",
          "Nombre de pêcheurs / pirogues",
          "Effort de pêche",
          "Engins utilisés",
          "Prix et revenus",
          "Espèces cibles (poulpe, holothurie, crabe…)",
          "Autre"
        ],
        "other": true,
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q162",
        "n": 162,
        "label": "Combien de sites / stations sont suivis par campagne ?",
        "required": false,
        "type": "number",
        "min": 0,
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      },
      {
        "id": "q163",
        "n": 163,
        "label": "Les résultats sont-ils restitués à la communauté ?",
        "required": false,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Parfois"
        ],
        "showIf": {
          "q": "q150",
          "ne": "Non"
        }
      }
    ]
  },
  {
    "key": "V4c",
    "title": "Pêche — harmonisation et recommandations",
    "short": "Harmonisation",
    "group": "Volet Pêche",
    "photo": "retour-peche",
    "showIf": {
      "q": "q059",
      "any": [
        "Pêche"
      ]
    },
    "questions": [
      {
        "id": "q164",
        "n": 164,
        "label": "Quels sont vos besoins prioritaires pour améliorer le suivi ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Formation",
          "Financement",
          "Matériel",
          "Protocole standardisé",
          "Appui technique",
          "Base de données commune",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q165",
        "n": 165,
        "label": "Pensez-vous qu'une harmonisation nationale des protocoles est nécessaire ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Ne sait pas"
        ]
      },
      {
        "id": "q166",
        "n": 166,
        "label": "Quels critères sont importants pour un protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Simplicité",
          "Coût abordable",
          "Reproductibilité",
          "Adaptabilité locale",
          "Compatibilité internationale",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q167",
        "n": 167,
        "label": "Seriez-vous prêt à adopter un protocole national harmonisé ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être",
          "Sous conditions"
        ]
      },
      {
        "id": "q168",
        "n": 168,
        "label": "Si sous conditions, lesquelles ?",
        "required": false,
        "type": "textarea",
        "showIf": {
          "q": "q167",
          "eq": "Sous conditions"
        }
      },
      {
        "id": "q169",
        "n": 169,
        "label": "Quelles méthodes recommandez-vous pour un futur protocole national ?",
        "required": true,
        "type": "checkbox",
        "options": [
          "Enquêtes au débarquement",
          "Carnets de pêche",
          "Suivi des captures par la communauté",
          "Échantillonnage biométrique (tailles, poids)",
          "Suivi des réserves temporaires (poulpe…)",
          "Recensement des pêcheurs / pirogues",
          "Enquêtes socio-économiques",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "q170",
        "n": 170,
        "label": "Souhaitez-vous participer à l'élaboration du protocole national ?",
        "required": true,
        "type": "radio",
        "options": [
          "Oui",
          "Non",
          "Peut-être"
        ]
      }
    ]
  },
  {
    "key": "FFOM",
    "title": "Clôture : forces, faiblesses, opportunités et menaces",
    "short": "Clôture (FFOM)",
    "photo": "village-mangily",
    "questions": [
      {
        "id": "q171",
        "n": 171,
        "label": "Quelle est la principale force de votre façon de documenter ces savoirs ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q172",
        "n": 172,
        "label": "Quelle est sa principale faiblesse ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q173",
        "n": 173,
        "label": "Qu'est-ce qui faciliterait ou menacerait ce travail dans les prochaines années ?",
        "required": true,
        "type": "textarea"
      },
      {
        "id": "q174",
        "n": 174,
        "label": "Que devrait contenir, selon vous, un cadre national harmonisé ?",
        "required": true,
        "type": "textarea"
      }
    ],
    "eyebrow": "Clôture"
  },
  {
    "key": "DOC",
    "title": "Documents",
    "short": "Documents",
    "photo": "nasses",
    "questions": [
      {
        "id": "q176",
        "n": 176,
        "label": "Quels documents pouvez-vous partager avec l'équipe de recherche ?",
        "required": false,
        "type": "checkbox",
        "options": [
          "Protocoles d'enquête",
          "Fiches vierges",
          "Cartes participatives",
          "Calendriers saisonniers",
          "Bases de données de suivi",
          "PAG/PAGS",
          "Dina",
          "Comptes rendus de restitution",
          "Aucun",
          "Autre"
        ],
        "other": true
      },
      {
        "id": "docs",
        "n": "176b",
        "label": "Joindre les documents (facultatif)",
        "type": "file",
        "required": false,
        "maxFiles": 8,
        "maxMB": 10,
        "accept": "image/jpeg,image/png,application/pdf,.doc,.docx,.xls,.xlsx,.csv,.odt,.ods",
        "help": "PDF, Word, Excel, CSV ou photos (JPG/PNG) — 8 fichiers et 10 Mo par fichier au maximum. Vous pouvez aussi les envoyer par e-mail à l'adresse de contact."
      }
    ],
    "eyebrow": "Fin du questionnaire"
  }
]
};

if (typeof module !== "undefined") module.exports = SURVEY;
