import axios from "axios";

const APIs = [
  {
    regionConverter: (data) => {
      return {} ;
    },
    typeConverter:  {
        "ELECTRIC": "EL",
        "GAZ+ELEC HNR" : "GH",
        "GAZOLE" : "GO",
        "ESSENCE" : "ES",
    } ,
    reachData: async (immat) => {
      // get data from the response
      let url =
        "https://www.carte-grise.org/js/jQuery/getDonneesImmatriculation.php";
      let params = {
        immatriculation: immat,
      };
      const response = await axios.get(url, { params: params });
      return response.data;
    },
    getInfo: (data) => {
      return data;
    },
  },
  {
    url: "https://www.cartegriseminute.fr/js/jQuery/getDonneesImmatriculation.php?immatriculation=DV-412-ZL",
    regionConverter: (data) => {
      return data;
    },
    getInfo: (data) => {
      return data;
    },
  },
];

export default APIs;
