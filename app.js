var mongoose = require('mongoose'),
	express = require('express'),
	path = require('path'),
	_ = require('underscore'),
	a = require('./public/person'); 

var app = express();

// Config

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.static(path.join(__dirname, "public"))); 
	app.use(express.static(path.join(__dirname, "bower_components")));
});
app.get('/', function(req, res){
	res.render('index.html');
});

app.post('/', function(req, res){
	console.log("POST: ");
	console.log(req.body);
	var person = new a.Person({
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
	return res.send(person);
});

app.delete('/', function(req, res) {
	return a.Person.remove(function(err) {
		if (!err) {
			console.log("removed");
			return res.send('');
		}
		else {
			console.log(err);
		}
	})
	});


var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);
