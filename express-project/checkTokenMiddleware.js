// let myToken = "12345";

let checkToken = (req, res, next) => {
  if (req.query.token == " " || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "please fill the token",
    });
  }
  if (req.query.token != process.env.MYToken) {
    return res.send({
      status: 0,
      msg: "please fill the corect token",
    });
  }
  next();
};

module.exports = { checkToken };
