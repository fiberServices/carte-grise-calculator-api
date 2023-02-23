// CONSTANTS
const C02 = 0;

const P3Partiel = {
  "région Guadeloupe": 1,
  "région Martinique": 1,
  "région Guyane": 1,
  "région La Reunion": 1,
  "région Mayotte": 1,
  "région Ile-de-France": 0,
  "région Centre-Val de Loire": 0.5,
  "région Bourgogne-Franche-Comté": 1,
  "région Normandie": 0,
  "région Hauts-de-France": 0.5,
  "région Grand Est": 1,
  "région Pays de la Loire": 1,
  "région Bretagne": 0.5,
  "région Nouvelle-Aquitaine": 1,
  "région Occitanie": 1,
  "région Auvergne-Rhone-Alpes": 0,
  "région Provence-Alpes-Côte d'Azur": 1,
  "région Corse": 1,
};

const P3Total = {
  "région Guadeloupe": 0,
  "région Martinique": 0,
  "région Guyane": 0,
  "région La Reunion": 0,
  "région Mayotte": 0,
  "région Ile-de-France": 0,
  "région Centre-Val de Loire": 0,
  "région Bourgogne-Franche-Comté": 0,
  "région Normandie": 0,
  "région Hauts-de-France": 0,
  "région Grand Est": 0,
  "région Pays de la Loire": 0,
  "région Bretagne": 0,
  "région Nouvelle-Aquitaine": 0,
  "région Occitanie": 0,
  "région Auvergne-Rhone-Alpes": 0,
  "région Provence-Alpes-Côte d'Azur": 0,
  "région Corse": 0,
};

const P3 = {
  exoTotal: ["EL", "H2", "HE", "HH"],
  exoPartiel: [
    "EE",
    "EH",
    "GL",
    "GH",
    "GP",
    "EG",
    "ER",
    "EQ",
    "G2",
    "FE",
    "FG",
    "FN",
    "FL",
    "FH",
    "GN",
    "EN",
    "GF",
    "1A",
    "EM",
    "EP",
    "GM",
    "GQ",
    "NE",
    "NH",
  ],
  nonExo: ["ES", "GO", "ET", "GA", "GZ", "GG", "GE", "PL", "AC"],
};



const HORSETAXBYREGION = {
  "région Guadeloupe": 41.0,
  "région Martinique": 30.0,
  "région Guyane": 42.5,
  "région La Reunion": 51.0,
  "région Mayotte": 30.0,
  "région Ile-de-France": 46.15,
  "région Centre-Val de Loire": 49.8,
  "région Bourgogne-Franche-Comté": 51.0,
  "région Normandie": 35.0,
  "région Hauts-de-France": 33.0,
  "région Grand Est": 48.0,
  "région Pays de la Loire": 48.0,
  "région Bretagne": 51.0,
  "région Nouvelle-Aquitaine": 41.0,
  "région Occitanie": 44.0,
  "région Auvergne-Rhone-Alpes": 43.0,
  "région Provence-Alpes-Côte d'Azur": 51.2,
  "région Corse": 27.0,
};

const VEHICLETYPEPERTAX = {
  "utilitaires": 0.5,
  "vehicules de tourisme": 0,
  "transport de marchandises": 0.5,
  "transport en commun": 285,
  "tracteurs routiers": 0.5,
};

export { C02, P3, HORSETAXBYREGION, VEHICLETYPEPERTAX, P3Partiel, P3Total };
