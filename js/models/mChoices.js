//mChoices.js
//make class of Choices object to hold the session cards for Choices

APP.Choices = Backbone.Model.extend({

    urlRoot: '/game',

    defaults: {
        choices: ["C1", "C2", "C3"]
    }

});