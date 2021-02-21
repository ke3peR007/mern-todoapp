const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const todo = require("./routes/todoRoute")



mongoose.connect("mongodb://localhost:27017/todoDB",
    {
        useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true 
    }).then(()=> {
        console.log("database connected!");
    });

app.use("/api", todo);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to todo application." });
  });

app.listen(8000, () =>{
    console.log("server is running on port 8000");
});