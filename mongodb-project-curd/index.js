let express = require("express");
const dbConnection = require("./dbConnection");
let app = express();

app.use(express.json());

app.get("/student-read", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("student");
  let data = await studentCollection.find().toArray();

  let resObj = {
    status: 1,
    msg: "Student List",
    data,
  };
  res.send(resObj);
  //   res.send("Student View API");
});

app.post("/student-insert", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("student");

  //   let obj = {
  //     sName: req.body.sName,
  //     sEmail: req.body.sEmail,
  //   };

  let { sName, sEmail } = req.body;
  let obj = { sName, sEmail };

  let insertRes = await studentCollection.insertOne(obj);
  let resObj = {
    status: 1,
    msg: "Data Insert",
    insertRes,
  };
  res.send(resObj);
});

app.listen("8000");
