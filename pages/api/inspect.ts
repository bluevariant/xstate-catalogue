export default function handler(req, res) {
  res.send(require("./response.json").html);
}
