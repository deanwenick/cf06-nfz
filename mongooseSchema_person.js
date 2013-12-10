var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	customNeeds : Array,
	customFeelings: Array,
	customObservations: Array,
	customChoices: Array
});