let express = require("express");
var mongoose = require("mongoose");
let enquiryModel = require("./models/enquiry.model");
require("dotenv").config();

// connect to MongoDB

let app = express();

app.use(express.json());

app.post("/api/enuiry-insert", (req, res) => {
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });

  enquiry
    .save()
    .then(() => {
      // console.log("save data");
      res.send({ status: 1, message: "Enquiry saved successfully" });
    })
    .catch((err) => {
      // console.log(err);
      res.send({
        status: 0,
        message: "Error while saving enquiry",
        error: err,
      });
    });
});

mongoose.connect(process.env.DBURL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log("Server is Running on port" + process.env.PORT);
  });
});
