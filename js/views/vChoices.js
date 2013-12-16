//vChoices.js
//view for Choices page

APP.ChoicesView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (

        '<div class="panel-body">' +

        '<ul class="list-group">' +
          '<li class="list-group-item">' +
                '<input type="checkbox" name="choice" value="listen to thoughts about you" /> Listen to thoughts about YOU:</li>' +
          '<li class="list-group-item"><input type="checkbox" name="choice" value="listen to thoughts about me"  /> Listen to thoughts about ME:</li>' +
          '<li class="list-group-item"><input type="checkbox" name="choice" value="tell my story" /> Tell my Story</li>' +
            '</ul></div>' +
        '<button type=button name=submitChoicesList id=submitChoicesList>Add Choices</button>' +

        '<div class=container><h3>Choices:</h3>' +
        '<ul id=choices>' +
        '{{#each choices}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '<form id=choicesForm>' +
        '<label for=achoice><input type=text name=achoice id=achoice></label>' +
        '<button type=button name=submitChoice id=submitChoice>Submit</button>' +
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
        'click #submitChoice' : 'registerChoices',
        'click #submitChoicesList' : 'addChoicesList'
    },

    addChoicesList: function() {
        var fields = $( "input:checked" ).toArray();
        $.each(fields, function(index, value) {
        var choice = value.value;
        $('#myChoices').append('<li>' + choice + ' </li>');
        APP.NFZ.choices.push( {label: choice, type: "choices", color: "green"} );
        });
    },

    registerChoices: function() {
        var choicesField = $('#achoice');
        var choices = choicesField.val();
        APP.NFZ.choices.push( {label: choices, type: "choices", color: "green"} );
        $('#myChoices').append('<li>' + choices + ' </li>');
        choicesField.val("");
    }




});