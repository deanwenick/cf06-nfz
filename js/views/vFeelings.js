//vFeelings.js
//view for Feelings collection page

APP.FeelingsView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (
        '<div class=container><h3>Feelings:</h3>' +
        '<ul id=feelings>' +
        '{{#each feelings}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '<form id=feelingsForm>' +
        '<label for=afeeling><input type=text name=afeeling id=afeeling></label>' +
        '<button type=button>Submit</button>' +
        '</form>' +
        '<ul id=myFeelings></ul>' +
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
        'click button' : 'registerFeelings'
    },

    registerFeelings: function() {
        var feelingsField = $('#afeeling');
        var feelings = feelingsField.val();
        console.log(feelings);
        APP.NFZ.feelings.push( {label: feelings, type: "feelings", color: "red"} );
        $('#myFeelings').append('<li>' + feelings + ' </li>');
        //feelingsField.val("");
    }




});