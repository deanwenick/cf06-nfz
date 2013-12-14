//vBoard.js
//view for whole board
//visible on main page and last page

APP.BoardView = Backbone.View.extend ({

    el: "#guts",

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

        ),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function(model) {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));

    }




});