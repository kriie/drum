// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/calc.html");
});

app.post("/", function(req, res) {
  function add(num1, num2){
return  num1 + num2;
}
var num1 = parseFloat(req.body.num1);
var num2 = parseFloat(req.body.num2);

var ans =  add(num1, num2);
  res.send("Answer is " + ans);
});

app.listen("3000", function() {
  console.log("server is running");
});
