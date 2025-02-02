import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

// Criar pasta assets se não existir
const assetsDir = path.join(process.cwd(), "assets");
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();

await page.goto("https://developer.chrome.com/");

// Set screen size
await page.setViewport({ width: 1000, height: 1024 });

// Salvar screenshot com timestamp na pasta assets
const timestamp = new Date().toISOString().replace(/[:\.]/g, "-");
await page.screenshot({
  path: path.join(assetsDir, `screenshot-${timestamp}.png`),
});

await browser.close();
5;
