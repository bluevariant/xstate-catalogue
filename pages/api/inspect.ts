import fs from "fs-extra";

export default function handler(req, res) {
  fs.readFile("inspect/index2.html", "utf-8").then((v) => res.send(v));
}
