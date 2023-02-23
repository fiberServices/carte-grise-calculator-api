const { JSDOM } = require("jsdom");
const axios = require("axios");

// Make a request to the Norauto homepage
axios.get("https://www.norauto.fr/").then(response => {
  // Parse the HTML content using jsdom
  const dom = new JSDOM(response.data);

  // recherche par véhicule
  const recherche = dom.window.document.querySelector("#ws-home > main > div.container-fluid > div.row.subcontainer > div > div.row.no-gutters.align-items-center.tyrebycar-tabs > div:nth-child(2)");

  // Extract the title of the page
  const title = dom.window.document.querySelector("title").textContent;

  // Extract the names of the categories in the navigation menu
  const categories = Array.from(
    dom.window.document.querySelectorAll(".dropdown__link")
  ).map(category => category.textContent.trim());

  // Print out the results
  console.log("Title:", title);
  console.log("Categories:", categories);
});
