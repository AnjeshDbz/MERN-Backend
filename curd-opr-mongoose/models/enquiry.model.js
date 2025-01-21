let mongoose = require("mongoose");

//Create Schema
let userEnquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

let enquiryModel = mongoose.model("enuiry", userEnquirySchema);
module.exports = enquiryModel;
