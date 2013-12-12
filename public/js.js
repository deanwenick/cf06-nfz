$(document).ready(function(){
	$('button').on('click', function(){
		jQuery.post('/', {
			firstName: $('#firstName').val(),
			lastName: $('#lastName').val(),
			email: $('#email').val()
		}, function(data, textStatus, jqXHR) {
			console.log("Post response:"); console.dir(data); console.log(textStatus); console.dir(jqXHR); 
		});
	});
});