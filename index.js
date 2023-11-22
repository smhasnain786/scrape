const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();
app.use('/images', express.static(path.join(__dirname, 'uploads1')));
const PORT = process.env.PORT || 4000;

app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});
app.get("/img", (req, res) => {
  res.send("<img src='uploads1/screenshot.png'>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});