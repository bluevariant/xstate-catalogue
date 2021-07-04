const cheerio = require("cheerio");
const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

async function main() {
  const { data: html } = await axios.get("https://statecharts.io/inspect");
  const $ = cheerio.load(html);
  const temp = {};

  $("[href]").each((i, e) => {
    const link = $(e).attr("href");

    temp[link] = true;

    $(e).attr("href", path.join("/inspect/", link).replace(/\\/g, "/"));
  });

  $("[src]").each((i, e) => {
    const link = $(e).attr("src");

    temp[link] = true;

    $(e).attr("src", path.join("/inspect/", link).replace(/\\/g, "/"));
  });

  const files = Object.keys(temp);
  const baseUrl = "https://statecharts.io";
  const dest = path.join(__dirname, "../public/inspect");

  await fs.remove(dest);
  await fs.ensureDir(dest);

  for (const file of files) {
    const saveTo = path.join(dest, file);

    const { data } = await axios.get(baseUrl + file);

    await fs.ensureFile(saveTo);
    await fs.writeFile(saveTo, data);

    console.log(saveTo);
  }

  await fs.writeFile(
    path.join(__dirname, "../pages/api", "response.json"),
    JSON.stringify({
      html: $.html(),
    }),
  );
}

main().catch(console.error);
