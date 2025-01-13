const { getFullName, productLabel } = require("./services/product"); //desestruturação
const config = require("./services/config");
const databases = require(".//services/database");

// import { getFullName } from "./services/product.js";

async function main() {
  getFullName(1, "monitor");
  productLabel("monitor de 30 polegadas");
  //   console.log(config.devArea.prodution);

  databases.connectToDatabase("MongoDb");
  databases.desconectToDatabase("MondoDb");
}

main();
