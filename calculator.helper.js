import {
  C02,
  P3,
  HORSETAXBYREGION,
  VEHICLETYPEPERTAX,
  P3Partiel,
  P3Total,
} from "./calculator.Const.js";
// hepler functions
function ExonerationCalcultor(y1horsexo, startDate) {
  // var startDate = new Date(2016, 0, 1);
  var date = new Date();
  // if the default delay is more than 10 years then take away 50% of the result variable
  var isExonerated =
    date - startDate > 10 * 365 * 24 * 60 * 60 * 1000 ? true : false;
  return isExonerated ? y1horsexo * 0.5 : y1horsexo;
}

function ExonerationVehicleClean(Pa, type, region) {
  if (P3.nonExo.includes(type)) {
    return Pa * 1;
  }
  if (P3.exoTotal.includes(type)) {
    return Pa * P3Total[region];
  }
  if (P3.exoPartiel.includes(type)) {
    return Pa * P3Partiel[region];
  }
}

function PaCalcultor(CO2, P) {
  return (CO2 / 45 + P / 40) ^ 1.6;
}

function pollutionTax(P, t, CE) {
  return P * t * CE;
}

export {
  ExonerationCalcultor,
  PaCalcultor,
  pollutionTax,
  ExonerationVehicleClean,
};
