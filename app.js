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
    fs = require('fs'),
    mongoose = require('mongoose'),
    hbs = require('handlebars'),
    a = require('./public/person'),
	b = require('./public/card');


//set up pathing
var expressApp = express()
                            .use(express.static(path.join(__dirname, "css")))
                            .use(express.static(path.join(__dirname, "bower_components")))
                            .use(express.static(path.join(__dirname, "js")))
							.use(express(path.join(__dirname, "public")))
                            .engine('html', require('ejs').renderFile);

expressApp.set(express.bodyParser());

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

//expressApp.set("views", path.join(__dirname, "templates"))
//    .set("view engine", "hbs");


/*expressApp.get("/", function(req, res) {
<<<<<<< HEAD
    //res.redirect("/untitled");
=======
    res.redirect("/untitled");
>>>>>>> zoie
    //res.redirect("editor");
    //res.redirect("http://bbc.co.uk");
});*/

/*expressApp.get("/:filename", function(req, res) {
    var filename = req.param("filename"),
        filepath = path.join(__dirname, "data", filename);
        content = _.findWhere(fileContent, filename);

<<<<<<< HEAD
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
    /*if(!_.has(fileContent, filename)) {
=======
    if(!_.has(fileContent, filename)) {
>>>>>>> zoie
        fileContent[filename] = "";
    }

    res.render("editor", {filename: filename, content: content});
});*/


expressApp.get("/board", function(req, res) {
    res.send(db);
    console.log("index here");
});

expressApp.get('/', function(req, res){
	res.send(b.card_data);
    console.log(b.card_data);
});


/*expressApp.post('/', function(req, res){

	console.log("POST: ");
	console.log(req.body);
	var person = new a.Person({
		userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
	});
	console.log(person);
	person.save(function(err){
		if (!err) {
			return console.log("created");
		}
		else {
			return console.log(err);
		}
	});
	res.redirect("/chat", {username: person.userName});
});*/

expressApp.put('/', function(req, res){

})

expressApp.delete('/login', function(req, res) {
	console.log(req.body);
	return a.Person.findOne({userName: req.body.userName}, function(err, person) {
		return person.remove(function(err) {
		if (!err) {
			console.log("removed");
			return res.send('');
		}
		else {
			console.log(err);
		}
	})
	});
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

    ioServer.on("connection", function(clientSocket){
        clientSocket.on("login", function(Data){
        //fileContent[fileData.name] = applyPatch(fileData.patch, fileContent[fileData.name]);
            console.log("server received login" + Data);
            console.dir(Data);
            var person = new a.Person({
             userName: Data.userName,
                firstName: Data.firstName,
                lastName: Data.lastName,
                email: Data.email,
            });
            console.log(person);
            person.save(function(err){
                if (!err) {
                    return console.log("created");
                }
                else {
                    return console.log(err);
                }
            });
            clientSocket.emit("login", Data);
        //console.log(arguments);

        });
    });

    ioServer.on("connection", function(clientSocket){
        clientSocket.on("delete", function(Data){
        //fileContent[fileData.name] = applyPatch(fileData.patch, fileContent[fileData.name]);
            console.log("server received delete");
            console.dir(Data);
            a.Person.findOne({userName: Data.userName}, function(err, person) {
                person.remove(function(err) {
                    if (!err) {
                        console.log("removed");
                        //return res.send('');
                    }
                    else {
                        console.log(err);
                    }
                })
            });
            //clientSocket.emit("login", Data);

        });
    });

var port = process.env.PORT || 8000;
httpServer.listen(port);
//expressApp.listen(8000);
console.log("Started NFZ on port 8000");

