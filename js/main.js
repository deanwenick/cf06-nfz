//create global object for our app
//gives us global namespace without conflict
var APP = window.APP = {};

//advanceButton logic
//make variable so not looking it up all the time
var advanceButton = $('#advanceButton');
advanceButton.on('click', function(){
    Backbone.history.navigate('#/board', {trigger: true});
});