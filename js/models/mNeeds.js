//mNeeds.js
//make class of Needs object to hold the session cards for Needs

APP.Needs = Backbone.Model.extend({

    urlRoot: '/game',

    defaults: {
        needs: ["N1", "N2", "N3"]
    }

});