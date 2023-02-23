import {
  ExonerationCalcultor,
  PaCalcultor,
  pollutionTax,
  ExonerationVehicleClean,
} from "./calculator.helper.js";

import {
  C02,
  P3,
  HORSETAXBYREGION,
  VEHICLETYPEPERTAX,
} from "./calculator.Const.js";

import {
  P6,
  REGION,
  VEHICLETYPE,
  VEHICLEPOWERTYPE,
  STARTDATE,
} from "./calculator.Fake.js";

import axios from "axios";
import APIs from "./apis.js";

// regional tax
function Y1({ region, startDate, type }) {
  var exoCalculated = ExonerationCalcultor(
    P6 * HORSETAXBYREGION[region],
    startDate
  );
  return Math.round(ExonerationVehicleClean(exoCalculated, type, region));
}

// professional tax
function Y2() {
  return 0;
}

// pollution tax
function Y3() {
  return 0;
}

// gestion tax
function Y4() {
  return 11;
}

// redvancement of acheminement tax
function Y5() {
  return 2.76;
}

// this is Y6
function taxCalculator({ startDate, p, region, powerType }) {
  console.log("Y1 = ", Y1({ region, startDate, type: powerType }));
  console.log("Y2 = ", Y2());
  console.log("Y3 = ", Y3());
  console.log("Y4 = ", Y4());
  console.log("Y5 = ", Y5());
  return {
    y1: Y1({ region, startDate, type: powerType }),
    y2: Y2(),
    y3: Y3(),
    y4: Y4(),
    y5: Y5(),
    y6: Y1({ region, startDate, type: powerType }) + Y2() + Y3() + Y4() + Y5(),
  };
}

// the main function

export default taxCalculator;
