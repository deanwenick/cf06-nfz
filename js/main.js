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

    // var oldView = $('#guts').contents();
    // oldView.destroy();
    var currentURL = Backbone.history.fragment;
    switch (currentURL) {
        case "" :
            Backbone.history.navigate('#/observations', {trigger: true});
            $('#advanceButton').html("Now identify your feelings &rarr;&nbsp;&rarr;");
            break;
        case "observations" :
            Backbone.history.navigate('#/feelings', {trigger: true});
            $('#advanceButton').html("Next identify your needs &rarr;&nbsp;&rarr;");
            break;
        case "feelings" :
            Backbone.history.navigate('#/needs', {trigger: true});
            $('#advanceButton').html("Next identify your choices &rarr;&nbsp;&rarr;");
            break;
        case "needs" :
            Backbone.history.navigate('#/choices', {trigger: true});
            $('#advanceButton').html("Now make a request &rarr;&nbsp;&rarr;");
            break;
        case "choices" :
            Backbone.history.navigate('#/request', {trigger: true});
            $('#advanceButton').html("Now you can evaluate &rarr;&nbsp;&rarr;");
            break;
        case "request" :
            Backbone.history.navigate('#/board', {trigger: true});
            $('#advanceButton').html("Share, if you like &rarr;&nbsp;&rarr;");
            break;
        case "board" :
            //code here for sharing board
            alert('This will let you go back to re-evaluate. Not working yet.');
            break;
        default :
            alert('Something is not right with the game. Call Dean');
            break;


    }
    
});