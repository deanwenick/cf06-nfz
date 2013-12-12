var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var personSchema = new Schema({
	firstName: { type: String, default: ''},
	lastName: {type: String, default: ''},
	email: {type: String, unique: true, default: ''},
	customNeeds : {type: Array, default: []},
	customFeelings: {type: Array, default: []},
	customObservations: {type: Array, default: []},
	customChoices: {type: Array, default: []}});
var Person = mongoose.model('Person', personSchema);

// Database
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
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
module.exports;
module.exports.Person = Person;