//vNeeds.js
//view for Needs collection page

APP.NeedsView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (

        '<div class=container><h3>Needs:</h3>' +
        '<p>The term needs refers to all that sustains us physically, emotionally, mentally, interpersonally, and spiritually. Needs, and the feelings that arise from them, are moment-to-moment expressions of how we are. Needs are universal. Although cultural customs, languages, and beliefs differ, we all have the same needs. We have both survival needs and thriving needs. </p>' +
        '<h4>Check it out for yourself:</h4>' +
        '<p>Ask yourself: “How would my perception change if I learned to always look through a lens of needs, and to understand that each of us in each moment is doing the best we know how to meet our needs?”</p>' +
        '<div class="panel-body">' +

        '<ul class="list-group">' +
          '<li class="list-group-item">' +
            '<input type="checkbox" name="choice" value="listen to thoughts about you"  /> Listen to      thoughts about YOU:</li>' +
          '<li class="list-group-item">' +
            '<input type="checkbox" name="choice" value="listen to thoughts about me"  /> Listen to thoughts      about ME:</li>' +
          '<li class="list-group-item">' +
           ' <input type="checkbox" name="choice" value="tell my story"  /> Tell my Story</li>' +
         '</ul>' +
         '<button type=button name=submitNeedsList id=submitNeedsList class=btn>Add Needs</button>' +
        '</div>' +
        '<form id=needsForm>' +
        '<label for=aneed><input type=text name=aneed id=aneed></label>' +
        '<button type=button name=submitNeed id=submitNeed class=btn>Submit</button>' +
        '</form>' +
        '<ul id=myNeeds></ul>' +
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
        'click #submitNeed' : 'registerNeeds',
        'click #submitNeedsList' : 'addNeedsList'
    },

    addNeedsList: function() {
        var fields = $( "input:checked" ).toArray();
        $.each(fields, function(index, value) {
        var need = value.value;
        $('#myNeeds').append('<li>' + need + ' </li>');
        APP.NFZ.needs.push( {label: need, type: "need", color: "yellow"} );
        });
    },

    registerNeeds: function() {
        var needsField = $('#aneed');
        var needs = needsField.val();
        APP.NFZ.needs.push( {label: needs, type: "needs", color: "yellow"} );
        $('#myNeeds').append('<li>' + needs + ' </li>');
        needsField.val("");
    }
});