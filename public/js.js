//handle data coming from db on intital page load
//called in ajax call below

function createCardDeck(data){
	console.log("in create deck");
	var choices = [],
		needs = [],
		feelings = [];

		_.each(data['cards'], function() {
			if (data['cards'].type === 'Feelings') {
				console.log("creating deck");
			}
		});
}

$(document).ready(function(){
	$('#send').on('click', function(event){
		event.preventDefault();
		console.log("you suck!");
		jQuery.post('/', {
			userName: $('#userName').val(),
			firstName: $('#firstName').val(),
			lastName: $('#lastName').val(),
			email: $('#email').val()
		}, function(data, textStatus, jqXHR) {
			console.log("Post response:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
		});
	});

	$('#delete').on('click', function(event){
		event.preventDefault();
		console.log("deleted!");
		$.ajax({
			url: '/',
			type: "DELETE",
			success: function (data, textStatus, jqXHR) {
				console.log("Post response:");
				console.dir(data);
				console.log(textStatus);
				console.dir(jqXHR);
			},
			error: function(){
				console.log("not working");
			},
			data: {
			userName: $('#userName').val(),
			firstName: $('#firstName').val(),
			lastName: $('#lastName').val(),
			email: $('#email').val()
		}

		});
	});

/*	$.ajax({
		url: 'public/card:card_data',
		type: "GET",
		cache: false,
		dataType: 'json',
		success: function(data, textStatus, jqXHR){
			console.log('joe');
			//console.log('thats the request');
		}
	});*/
});