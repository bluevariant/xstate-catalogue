const cheerio = require("cheerio");
const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

async function main() {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
  const $ = cheerio.load(html);
  const temp = {};

  $("[href]").each((i, e) => {
    const link = $(e).attr("href");

    temp[link] = true;

    if (link.startsWith("/")) {
      $(e).attr("href", link.replace("/", ""));
    }
  });

  $("[src]").each((i, e) => {
    const link = $(e).attr("src");

    temp[link] = true;

    if (link.startsWith("/")) {
      $(e).attr("src", link.replace("/", ""));
    }
  });

  const files = Object.keys(temp);
  const baseUrl = "https://statecharts.io";

  for (const file of files) {
    const saveTo = path.join(__dirname, '../public', file);

    const { data } = await axios.get(baseUrl + file);

    await fs.ensureFile(saveTo);
    await fs.writeFile(saveTo, data);

    console.log(saveTo);
  }

  console.log($.html());
}

main().catch(console.error);
