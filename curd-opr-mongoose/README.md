1- npm init -y
2- npm i express
3- npm i mongoose
4- create index.js or .env file
5- npm i dotenv


6-Project setup
step-1 : let express = require("express"); 
         let app = express();
         var mongoose = require("mongoose");
         require("dotenv").config();

step-2: // connect to MongoDB
        
        let app = express();

        mongoose.connect(process.env.DBURL).then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => {
        console.log("Server is Running on port" + process.env.PORT);
        });
        });

 