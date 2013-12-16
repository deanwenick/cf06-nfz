//vFeelings.js
//view for Feelings collection page

APP.FeelingsView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (

        ' <div class="panel-body">' +
        '<ul class="list-group">' +
        '<li class="list-group-item">' +
          '<input type="checkbox" name="feeling" value="eager"  /> Eager' +
        '</li>' +
        '<li class="list-group-item">' +
          '<input type="checkbox" name="feeling" value="uneasy"  /> Uneasy' +
        '</li>' +
        '<li class="list-group-item">' +
          '<input type="checkbox" name="feeling" value="curious"  /> Curious' +
        '</li>' +
        '</ul>' +
        '<button type=button name=submitFeelingsList id=submitFeelingsList>Add Feelings</button>' +
      '</div>' +

        '<div class=container><h3>Feelings:</h3>' +
        '<ul id=feelings>' +
        '{{#each feelings}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '<form id=feelingsForm>' +
        '<label for=afeeling><input type=text name=afeeling id=afeeling></label>' +
        '<button type=button name=submitFeelings id=submitFeelings>Submit</button>' +
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
        'click #submitFeelings' : 'registerFeelings',
        'click #submitFeelingsList' : 'addFeelingsList'
    },

    addFeelingsList: function() {
        fields = $( "input:checked" ).toArray();
        $.each(fields, function(){alert('hello');});
    },

    registerFeelings: function() {
        var feelingsField = $('#afeeling');
        var feelings = feelingsField.val();
        APP.NFZ.feelings.push( {label: feelings, type: "feelings", color: "red"} );
        $('#myFeelings').append('<li>' + feelings + ' </li>');
        feelingsField.val("");
    }
});