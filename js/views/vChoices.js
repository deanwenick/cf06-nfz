//vChoices.js
//view for Choices page

APP.ChoicesView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (


        '<div class=container><h3>Choices:</h3>' +
        '<p>Each moment we have choices about how we respond to life. What are these choices? We expand our freedom by developing greater awareness of our choices, and by learning new skills for responding. Nonviolent Communication practice develops new skills, which thereby increase our choices for making observations, listening to our feelings and needs, listening to others’ feelings and needs, making requests, solving problems, and resolving conflicts.</p>' +
        '<div class="panel-body">' +

        '<ul class="list-group">' +
          '<li class="list-group-item">' +
                '<input type="checkbox" name="choice" value="listen to thoughts about you" /> Listen to thoughts about YOU:</li>' +
          '<li class="list-group-item"><input type="checkbox" name="choice" value="listen to thoughts about me"  /> Listen to thoughts about ME:</li>' +
          '<li class="list-group-item"><input type="checkbox" name="choice" value="tell my story" /> Tell my Story</li>' +
            '</ul></div>' +
        '<button type=button name=submitChoicesList id=submitChoicesList class=btn>Add Choices</button>' +
        '<form id=choicesForm>' +
        '<label for=achoice><input type=text name=achoice id=achoice></label>' +
        '<button type=button name=submitChoice id=submitChoice class=btn>Submit</button>' +
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