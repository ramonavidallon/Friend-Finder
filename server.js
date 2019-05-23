//NPM PACKAGES USED FOR THIS APPLICATION//
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//SENDS A MESSAGE TO NODE AND TELL IT WE ARE USING EXPRESS//
var app = express();
//SETTING PORT//
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var apiroutes = require("./app/routing/apiRoutes.js");
var htmlroutes = require("./app/routing/htmlRoutes.js");

app.use(apiroutes);
app.use(htmlroutes);
//SERVER START UP//
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});