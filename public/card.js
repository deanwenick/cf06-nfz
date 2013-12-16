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

var card_data = JSON.parse(fs.readFileSync('cards.json', 'utf8'));
console.log(card_data);
module.exports.card_data = card_data;

module.exports.Card = Card;


