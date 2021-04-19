console.log("starting server");

const express = require("express");
var bodyParser = require('body-parser')


const app = express();

app.use(express.static(__dirname + "/public"))

app.listen(3000);