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
});