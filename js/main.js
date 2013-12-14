//create global object for our app
//gives us global namespace without conflict
var APP = window.APP = {};
//create global object for this players cards
APP.NFZ = {};
APP.NFZ.observations = [];

//advanceButton logic
//make variable so not looking it up all the time
var advanceButton = $('#advanceButton');
advanceButton.on('click', function(){
    Backbone.history.navigate('#/observations', {trigger: true});
});