//vFeelings.js
//view for Feelings collection page

APP.FeelingsView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (


        '<div class=container><h3>Feelings:</h3>' +
        '<p>Feelings are our biofeedback system, calling attention to our deeper needs and values. How many feelings do you have? What are your feelings telling you? Feelings refer to inner experiences or emotions, which are connected to needs. When needs are met, we experience pleasurable feelings such as content, happy, thrilled, engaged, or peaceful. When needs are unmet, we experience painful feelings such as upset, sad, fearful, or frustrated.</p>' +
        ' <div class="panel-body">' +
        '<h4>Check it out for yourself:</h4>' +
        '<p>Listen to yourself when you say the words, “I feel...”. Do you hear a feeling or emotion? Do you hear a thought or analysis? Listen to others with the same questions.</p>' +
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
        '<button type=button name=submitFeelingsList id=submitFeelingsList class=btn>Add Feelings</button>' +
      '</div>' +
      '<h4>Any others?</h4>' +
        '<form id=feelingsForm>' +
        '<label for=afeeling><input type=text name=afeeling id=afeeling></label>' +
        '<button type=button name=submitFeelings id=submitFeelings class=btn>Submit</button>' +
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
        var fields = $( "input:checked" ).toArray();
        $.each(fields, function(index, value) {
        var feeling = value.value;
        $('#myFeelings').append('<li>' + feeling + ' </li>');
        APP.NFZ.feelings.push( {label: feeling, type: "feelings", color: "red"} );
        });
    },

    registerFeelings: function() {
        var feelingsField = $('#afeeling');
        var feelings = feelingsField.val();
        APP.NFZ.feelings.push( {label: feelings, type: "feelings", color: "red"} );
        $('#myFeelings').append('<li>' + feelings + ' </li>');
        feelingsField.val("");
    }
});