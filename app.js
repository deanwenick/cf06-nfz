var path = require("path"),
    _ = require("underscore"),
    express = require("express"),
    //app = express(),
    socketIO = require("socket.io"),
    http = require('http'),
    patch = require('diff_match_patch'),
    fs = require('fs');



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
var expressApp = express();

expressApp.set("views", path.join(__dirname, "templates"))
   .set("view engine", "hbs");

expressApp.get("/", function(req, res) {
    res.redirect("/untitled");
    //res.redirect("editor");
    //res.redirect("http://bbc.co.uk");
});

expressApp.get("/:filename", function(req, res) {
    var filename = req.param("filename"),
        filepath = path.join(__dirname, "data", filename);
        content = _.findWhere(fileContent, filename);

    /*if (fs.existsSync(filepath)){
        var content = fs.readFileSync(filepath);
        res.render("editor", {filename: filename, content: content})
    }else{
        res.send(404);
    }*/ // Synchronous file processing

    /*fs.exists(filepath, function(exists){
        if (exists){
            fs.readFile(filepath, function(err, content){
                res.render("editor", {filename: filename, content: content});
            });
        }else{
            //console.log("file doesn't exist");
            //console.log(filename);
            //console.log(filepath);
            res.send(404);
        }
    });*/

    /*if(!content) {
        fileContent[filename] = "";
        content = "";
    }*/
    if(!_.has(fileContent, filename)) {
        fileContent[filename] = "";
    }

    //res.render("editor", {filename: filename, content: content});
    res.render("editor", {filename: filename, content: content});
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

var port = process.env.PORT || 8000;
httpServer.listen(port);
//expressApp.listen(8000);
console.log("Started NFZ on port 8000");