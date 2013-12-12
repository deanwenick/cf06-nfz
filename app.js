var mongoose = require('mongoose'),
	express = require('express'),
	path = require('path'),
	_ = require('underscore');

var app = express();

// Database
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	var personSchema = new Schema({
	firstName: { type: String, default: ''},
	lastName: {type: String, default: ''},
	email: {type: String, default: ''},
	customNeeds : {type: Array, default: []},
	customFeelings: {type: Array, default: []},
	customObservations: {type: Array, default: []},
	customChoices: {type: Array, default: []}
});
	var Person = mongoose.model('Person', personSchema);
	var alex = new Person({firstName: "Alexander", lastName: "Miranda", email: "amiranda@umich.edu", customNeeds: [], customFeelings: [], customObservations: [], customChoice: []})
	alex.save(function(err, alex) {
		if(err){
			console.log("Error saving person instance " + alex.firstName + " " + alex.lastName);
		}
		else {
			Person.find(function(err, people){
				if (err){
					console.log("Could not find collection");
				}
				else {
					console.log(people);
				}

		})
		}
	});
});

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
	var person = new Person({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
	});
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


var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);
