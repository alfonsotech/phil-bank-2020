const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const mongoose = require('mongoose')
const routes = require("./routes")
const app = express()
const PORT = process.env.PORT || 5000
require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(routes)


//Mongoose Connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/philosophyranked", { useNewUrlParser: true })
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to mongodb://localhost/philosophyranked')
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT)
})
