var express = require("express");

var app = express();
var router = express.Router();

var prepareHello = (req, res, next) => {
  req.hello = "Hello!!";
  next();
};

var sendHello = (req, res) => {
  res.send(req.hello);
};

router.route("/").get(prepareHello, sendHello);

app.use(router);

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
