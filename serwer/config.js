const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const port = 3000;
const app = express();
app.use(cors());

var con = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "leaflet",
  password: "",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

app.get("/login/:user/:pass", function (req, res) {
  const user = req.params.user;
  const pass = req.params.pass;

  const sql = `SELECT upr FROM leaflettab WHERE user = "${user}" AND password = "${pass}"`;

  con.query(sql, function (err, result, fields) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port);
