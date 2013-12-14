//Router.js
//this is client side code, delivered to the browser
//this acts like a controller, routing requests to functions to render views

APP.Router = Backbone.Router.extend({
    routes: {
        "board"          : "showBoard",
        "observations"   : "collectObservations",
        "feelings"       : "collectFeelings",
        "needs"          : "collectNeeds",
        "choices"        : "collectChoices"
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
    
    showStories: function() {

        //this makes a new collection instance
        APP.stories = new APP.Stories();

        //get an object from db called collection
        //can be called anything
        APP.stories.fetch( {
            success: function( collection, response, options ){
                APP.storiesView = new APP.StoriesView({
                    collection: collection
                });

                APP.storiesView.render();

                $( '#content' ).html( APP.storiesView.$el );
            }//end success
        });
    }//end show stories

});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});