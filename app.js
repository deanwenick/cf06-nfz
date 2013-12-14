//app.js
//this is our server side code
//node.js app uses express server
var path = require("path"),
    _ = require("underscore"),
    express = require("express"),
    //app = express(),
    socketIO = require("socket.io"),
    http = require('http'),
    patch = require('diff_match_patch'),
    fs = require('fs');


//set up pathing
var expressApp = express().use(express.static(__dirname,
                                        path.join(__dirname, "css"),
                                        path.join(__dirname, "bower_components"),
                                        path.join(__dirname, "js")));


expressApp.use(express.bodyParser());

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

// The server holds the contents of various open files in this
// global object.
var fileContent = {};


function applyPatch(patchText, content) {
    var dmp = new patch.diff_match_patch();
    console.log("----- Applying Patch -----");
    var ms_start = (new Date()).getTime(),
        patchList = dmp.patch_fromText(patchText),
        newContent = dmp.patch_apply(patchList, content),
        ms_end = (new Date()).getTime();

    console.log("Applying patch took %s ms.", ms_end - ms_start);
    console.log("--------------------------");

    return newContent[0];
}

// ExpressJS Server Definition
//var expressApp = express();

expressApp.set("views", path.join(__dirname, "templates"))
    .set("view engine", "hbs");


/*expressApp.get("/", function(req, res) {
    res.redirect("/untitled");
    //res.redirect("editor");
    //res.redirect("http://bbc.co.uk");
});*/

/*expressApp.get("/:filename", function(req, res) {
    var filename = req.param("filename"),
        filepath = path.join(__dirname, "data", filename);
        content = _.findWhere(fileContent, filename);

    if(!_.has(fileContent, filename)) {
        fileContent[filename] = "";
    }

    res.render("editor", {filename: filename, content: content});
});*/

expressApp.get("/board", function(req, res) {
    res.send(db);
    console.log("index here");
});

var httpServer = http.createServer(expressApp),
    ioServer = socketIO.listen(httpServer);

// Listen for socket.io events
    ioServer.on("connection", function(clientSocket){
        clientSocket.on("sendMessage", function(fileData){
        fileContent[fileData.name] = applyPatch(fileData.patch, fileContent[fileData.name]);
        clientSocket.broadcast.emit("sendMessage", fileData);
        //console.log(arguments);

        });

    });

    ioServer.on("connection", function(clientSocket){
        clientSocket.on("sendCards", function(fileData){
        fileContent[fileData.name] = applyPatch(fileData.patch, fileContent[fileData.name]);
        clientSocket.broadcast.emit("sendCards", fileData);
        //console.log(arguments);

        });
    });

var port = process.env.PORT || 8000;
httpServer.listen(port);
//expressApp.listen(8000);
console.log("Started NFZ on port 8000");

