//app.js
//this is our server side code
//node.js app uses express server

var path = require("path");
var express = require("express");
var _ = require("underscore");



//set up pathing
var app = express().use(express.static(__dirname,
                                        path.join(__dirname, "css"),
                                        path.join(__dirname, "bower_components"),
                                        path.join(__dirname, "js")));
app.use(express.bodyParser());

var dataID = 1;


var db = [
    {
        user: 'Person',
        observations: ["O1", "O2", "03"],
        feelings: ["F1", "F2", "F3"],
        needs: ["N1", "N2", "N3"],
        requests: ["R1", "R2", "R3"],
        choices: ["C1", "C2", "C3"],
        temperature: 5
    }
];

app.get("/", function(req, res) {
    res.send(db);
    console.log("index here");
});

app.get("/hello", function(req, res) {
    res.send("Hello World!");
    console.log("hello");
});



var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port %s", port);