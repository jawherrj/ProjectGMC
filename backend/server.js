const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

require("dotenv").config({ path: "./config/.env" });
const Port = process.env.port || 9000;
const connect = require("./config/db");
connect();
app.use(express.json());
app.use("/auth", require("./routes/authRoutes"));

app.listen(Port, (error) =>
  error
    ? console.log(error.message)
    : console.log("this server is running on server port " + Port)
);
