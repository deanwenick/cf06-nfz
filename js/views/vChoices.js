//vChoices.js
//view for Choices page

APP.ChoicesView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (
        '<div class=container><h3>Choices:</h3>' +
        '<ul id=choices>' +
        '{{#each choices}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '<form id=choicesForm>' +
        '<label for=achoice><input type=text name=achoice id=achoice></label>' +
        '<button type=button>Submit</button>' +
        '</form>' +
        '<ul id=myChoices></ul>' +
        '</div>'

        ),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function(model) {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));

    },

    events: {
        'click button' : 'registerChoices'
    },

    registerchoices: function() {
        var choicesField = $('#achoice');
        var choices = choicesField.val();
        console.log(choices);
        APP.NFZ.choices.push( {label: choices, type: "choices", color: "green"} );
        $('#myChoices').append('<li>' + choices + ' </li>');
        //feelingsField.val("");
    }




});