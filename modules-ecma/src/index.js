// import * as database from "./utils/database.js"; //pega tudo no arquivo
import { connectToDatabase, connectApi } from "./utils/database.js";

async function main() {}

connectToDatabase("banco");
connectApi(
  "https://web.dio.me/course/104d59f6-26ae-4e12-967d-e86fa614819e/learning/1d4a002f-e4e4-4159-9289-e0d8129f05fb?autoplay=1&back=%2Ftrack%2Fformacao-nodejs-fundamentals"
);
