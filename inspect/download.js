const cheerio = require("cheerio");
const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");
const babel = require("@babel/core");
const htmlMinifier = require("html-minifier").minify;

function getInjectJs() {
  const jqueryScript = fs.readFileSync(
    path.join(__dirname, "./jquery-3.6.0.min.js"),
    "utf-8"
  );
  const injectScript = babel.transform(
    fs.readFileSync(path.join(__dirname, "./inject.js"), "utf-8"),
    {
      presets: ["@babel/preset-env"],
    }
  ).code;

  return [jqueryScript, injectScript].join("");
}

function getInjectCss() {
  return fs.readFileSync(path.join(__dirname, "./inject.css"), "utf-8");
}

function minify(html) {
  return htmlMinifier(html, {
    minifyJS: true,
    minifyCSS: true,
  });
}

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

    let { data } = await axios.get(baseUrl + file);

    if (saveTo.endsWith(".js")) {
      if (data.includes("Statecharts.io")) {
        data = data.split("Statecharts.io").join("");
      }
    }

    await fs.ensureFile(saveTo);
    await fs.writeFile(saveTo, data);

    console.log(path.relative(dest, saveTo));
  }

  $("head").append($(`<style>${getInjectCss()}</style>`));
  $("body").append($(`<script>${getInjectJs()}</script>`));
  $("title").text("");
  $('[data-xviz="inspector-header"]').remove();

  await fs.writeFile(
    path.join(__dirname, "../env/", "statecharts.json"),
    JSON.stringify({
      html: minify($.html()),
    })
  );
}

main().catch(console.error);
