const puppeteer = require("puppeteer");

const takeScreenshot = async () => {
  const url = "http://localhost:8080/#/templates/clean-slate/resume";
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle0" });
  } catch (e) {
    if (e.toString().includes("ERR_CONNECTION_REFUSED")) {
      console.log("Please run `npm run serve` before generating a screen shot");
      process.exit(1);
    }
  }

  await page.screenshot({
    path: "screenshots/resume.png",
    fullPage: true,
    omitBackground: true
  });

  await browser.close();
};

takeScreenshot();
