import axios from "axios";

export default function handler(req, res) {
  console.log(req.headers);

  axios
    .get("https://statecharts.io/inspect", {
      headers: {
        "sec-ch-ua": req.headers["sec-ch-ua"],
        "sec-ch-ua-mobile": req.headers["sec-ch-ua-mobile"],
        "upgrade-insecure-requests": req.headers["upgrade-insecure-requests"],
        "user-agent": req.headers["user-agent"],
        "sec-fetch-site": req.headers["sec-fetch-site"],
        "sec-fetch-mode": req.headers["sec-fetch-mode"],
        "sec-fetch-dest": req.headers["sec-fetch-dest"],
        accept: req.headers["accept"],
        referer: req.headers["referer"],
      },
    })
    .then(({ data }) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
  // res.redirect("https://statecharts.io/inspect");
}
