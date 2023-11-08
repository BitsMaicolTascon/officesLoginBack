const express = require("express");
const http = require("http");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "20mb" }));

const routes = require("./router.js");
const db = require("./database");
routes.default(app);

app.set("superSecret", process.env.SECRET);

let server = http.createServer(app);

function StartServer() {
  server.listen(process.env.PORT, function () {
    console.log("Server app listening on port " + process.env.PORT);
  });
}

db.mongoose
  .then(function (err) {
    console.log("Connection has been established successfully (MongoDB).");
    StartServer();
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });
module.exports = app;
