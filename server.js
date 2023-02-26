// a simple experess app to serve a json object
import APIs from "./apis.js";
import taxCalculator from "./app.js";

import experess from "express";

import cors from "cors";
var app = experess();

// add cors to allow cross origin requests

app.use(cors());

app.get("/getDataImmatriculation", async function (req, res) {
  // get parameters from the request
  var plaque = req.query.plaque;
  var region = req.query.region;
  // if req.query.region or req.query.plaque is empty return error message

  if (region === undefined || plaque === undefined) {
    res.send(
      {
        error: "region or plaque is undefined",
      },
      400
    );
    return;
  }

  var data = await APIs[0].reachData(plaque);

  // if error in data is not empty return error message
  console.log("error : " + data.erreur);
  const error = data.erreur;
  if (error !== "") {
    console.log("error after : " + error);
    res.send(
      {
        error: data.erreur,
      },
      400
    );
    return;
  }

  const immatriculationInfo = {
    immatriculation: data.immat,
    marque: data.marque,
    modele: data.modele,
    puissance: data.puisFisc,
    dateMiseEnCirculation: data.date1erCir_us,
    marque: data.marque,
    energy: data.energieNGC,
  };

  console.log("region : " + region);

  // send the response
  const taxValue = taxCalculator({
    p: data.puisFisc,
    region: region,
    startDate: new Date(data.date1erCir_us),
    // vehicleType: VEHICLETYPE,
    powerType: APIs[0].typeConverter[data.energieNGC],
  });

  res.send({
    region: region,
    price: {
      total: taxValue.total,
      y1: taxValue.y1,
      y2: taxValue.y2,
      y3: taxValue.y3,
      y4: taxValue.y4,
      y5: taxValue.y5,
      y6: taxValue.y6,
    },
    info: immatriculationInfo,
    data: data,
  });
});

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
