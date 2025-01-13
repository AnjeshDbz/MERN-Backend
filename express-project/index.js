let express = require("express");

let app = express();
app.use(express.json());
let myToken = "12345";
let myPass = "12345";

let checkToken = (req, res, next) => {
  console.log(req.query.token);

  if (req.query.token == " " || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "please fill the token",
    });
  }
  if (req.query.token != myToken) {
    return res.send({
      status: 0,
      msg: "please fill the corect token",
    });
  }
  next();
};

app.use(checkToken); //Middleware

app.use((req, res, next) => {
  if (req.query.pass == " " || req.query.pass == undefined) {
    return res.send({
      status: 0,
      msg: "please fill the password",
    });
  }
  if (req.query.pass != myPass) {
    return res.send({
      status: 0,
      msg: "please fill the corect password",
    });
  }
  next();
});

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home page Api" });
});

app.get("/news", (req, res) => {
  res.send({ status: 2, msg: "Nesw page Api" });
});

app.get("/news/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("News Details Api" + " " + currentId);
});

app.get("/product", (req, res) => {
  res.send({ status: 1, msg: "product page api" });
});

app.post("/login", (req, res) => {
  console.log(req.body); //object

  res.status(200).json({
    status: 1,
    msg: "Login Api",
    bodyData: req.body,
    queryData: req.query,
  });

  //   res.send({
  //     status: 1,
  //     msg: "Login Api",
  //     bodyData: req.body,
  //     queryData: req.query,
  //   });
});

// test

app.listen("8000");
