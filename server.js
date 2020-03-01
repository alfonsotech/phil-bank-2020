var express = require('express')
var bodyParser = require('body-parser')
const path = require("path")
require("dotenv").config()
var mongoose = require('mongoose')
var routes = require("./routes")
var app = express()
var PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(routes)


//Mongoose Connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/philosophyranked")
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to mongodb://localhost/philosophyranked');
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT)
})
