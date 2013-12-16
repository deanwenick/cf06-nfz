var mongoose = require('mongoose'),
	fs = require('fs'),
	_ = require('underscore');

var Schema = mongoose.Schema;
var cardSchema = new Schema({
	label: {type: String, default: ''},
	type: {type: String, default: ''},
	color: {type: String, default: ''}
});
var Card = mongoose.model('Card', cardSchema);
var card_data;

// Database

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

fs.readFile('cards.json', function(err, data){
	if (err){
		return console.log(err);
	}

	db_cards = JSON.parse(data);
	card_data = db_cards;
	d();
});

var d = function displayData() {
	return card_data;
};


module.exports.card_data = d();
module.exports.Card = Card;


