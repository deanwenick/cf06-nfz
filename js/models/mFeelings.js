//Feelings.js
//make class of Feelings object to hold the session cards for Feelings

APP.Feelings = Backbone.Model.extend({

    urlRoot: '/game',

    defaults: {
        feelings: ["F1", "F2", "F3"]
    }

});