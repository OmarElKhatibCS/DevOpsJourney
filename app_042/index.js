var express = require('express')
var app = express()
var ip = require('ip')
var os = require('os')

// URL at which MongoDB service is running
var url = "mongodb://mongo:27017";
 
// A Client to MongoDB
var MongoClient = require('mongodb').MongoClient;
 
// Make a connection to MongoDB Service
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected to MongoDB!");
  db.close();
}); 

app.get('/', function (req, res) {
    res.send('Simple API says "Hello!"')
})

app.get('/server/url', function (req, res) {
    res.send(req.url)
})

app.get('/server/ipaddress', function (req, res) {
    res.send(ip.address())
})

app.get('/server/hostname', function (req, res) {
    res.send(os.hostname())
})

app.listen(8080, function () {
    console.log('Simple Node.js REST API listening on port 8080!')
})
