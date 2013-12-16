//Router.js
//this is client side code, delivered to the browser
//this acts like a controller, routing requests to functions to render views

APP.Router = Backbone.Router.extend({
    routes: {
        "board"          : "showBoard",
        "observations"   : "collectObservations",
        "feelings"       : "collectFeelings",
        "needs"          : "collectNeeds",
        "choices"        : "collectChoices",
        "request"        : "collectRequest"
    },

    //get object passed by app.js
    showBoard: function() {

        APP.board = new APP.Board();
        APP.boardView = new APP.BoardView({model: APP.board});
        
    },//end showBoard

    collectObservations: function() {
        APP.observationsView = new APP.ObservationView();
    },

    collectFeelings: function() {
        APP.feelings = new APP.Feelings();
        APP.feelingsView = new APP.FeelingsView({model: APP.feelings});
    },

    collectNeeds: function() {
        APP.needs = new APP.Needs();
        APP.needsView = new APP.NeedsView({model: APP.needs});
    },

    collectChoices: function() {
        APP.choices = new APP.Choices();
        APP.choicesView = new APP.ChoicesView({model: APP.choices});
    },

    collectRequest: function() {
        APP.requestView = new APP.RequestView();
    },

});

APP.router = new APP.Router();
Backbone.history.start({root: "/Chat#/"});