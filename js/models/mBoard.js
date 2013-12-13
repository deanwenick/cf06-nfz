//Board.js
//make class of Board objects to hold the session cards

APP.Board = Backbone.Model.extend({

    urlRoot: '/game',

    defaults: {
        user: 'Person',
        observations: ["O1", "O2", "03"],
        feelings: ["F1", "F2", "F3"],
        needs: ["N1", "N2", "N3"],
        requests: ["R1", "R2", "R3"],
        choices: ["C1", "C2", "C3"],
        temperature: 5
    }

});