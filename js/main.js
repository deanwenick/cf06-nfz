//create global object for our app
//gives us global namespace without conflict
var APP = window.APP = {};
//create global object for this players cards
APP.NFZ = {};
APP.NFZ.observations = [];
APP.NFZ.feelings = [];
APP.NFZ.needs = [];
APP.NFZ.choices = [];
APP.NFZ.requests = [];

//advanceButton logic
//make variable so not looking it up all the time
var advanceButton = $('#advanceButton');
advanceButton.on('click', function(){

    var oldView = $('#guts').contents();
    alert(JSON.stringify(oldView));
    oldView.destroy();
    var currentURL = Backbone.history.fragment;
    switch (currentURL) {
        case "" :
            Backbone.history.navigate('#/observations', {trigger: true});
            break;
        case "observations" :
            Backbone.history.navigate('#/feelings', {trigger: true});
            break;
        case "feelings" :
            Backbone.history.navigate('#/needs', {trigger: true});
            break;
        case "needs" :
            Backbone.history.navigate('#/choices', {trigger: true});
            break;
        case "choices" :
            Backbone.history.navigate('#/request', {trigger: true});
            break;
    }
    
});