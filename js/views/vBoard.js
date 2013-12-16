//vBoard.js
//view for whole board
//visible on main page and last page

APP.BoardView = Backbone.View.extend ({

    el: "#guts",

    template: function(){
        var board = "<div id=myBoard class=container>";
        board += "<h3>Observations:</h3><ul>";
        $.each(APP.NFZ.observations, function(i,val) {
            board += "<li>" + val.label + "</li>";
        });
        board += "</ul>";
        board += "<h3>Feelings</h3>";
        board += "</ul>";
        $.each(APP.NFZ.feelings, function(i,val) {
            board += "<li>" + val.label + "</li>";
        });
        board += "</ul>";
        board += "<h3>Needs</h3>";
        board += "</ul>";
        $.each(APP.NFZ.needs, function(i,val) {
            board += "<li>" + val.label + "</li>";
        });
        board += "</ul>";
        board += "<h3>Choices</h3>";
        board += "</ul>";
        $.each(APP.NFZ.choices, function(i,val) {
            board += "<li>" + val.label + "</li>";
        });
        board += "</ul>";
        board += "<h3>Requests</h3>";
        board += "</ul>";
        $.each(APP.NFZ.requests, function(i,val) {
            board += "<li>" + val.label + "</li>";
        });
        board += "</ul></div>";
        return board;
    },
    /*

    template: Handlebars.compile (

        '<div class=container><h3>Observations:</h3>' +
        '<ul id=observations>' +
        '{{#each observations}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '</div>' +

        '<div class=container><h3>Feelings:</h3>' +
        '<ul id=feelings>' +
        '{{#each feelings}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '</div>' +

        '<div class=container><h3>Needs:</h3>' +
        '<ul id=needs>' +
        '{{#each needs}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '</div>' +

        '<div class=container><h3>Your Choices</h3>' +
        '<ul id=choices>' +
        '{{#each choices}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '</div>' +

        '<div class=container><h3>Your Requests</h3>' +
        '<ul id=requests>' +
        '{{#each requests}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '</div>'

        ),*/

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function(model) {
        var attributes = this.model.attributes;
        this.$el.html(this.template());

    }




});