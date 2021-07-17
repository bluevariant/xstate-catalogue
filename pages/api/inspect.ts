export default function handler(req, res) {
  res.send(require("../../env/statecharts.json").html);
}
