//vNeeds.js
//view for Needs collection page

APP.NeedsView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (
        '<div class=container><h3>Needs:</h3>' +
        '<ul id=needs>' +
        '{{#each needs}}' +
            '<li>{{.}}</li>' +
            '{{/each}}' +
        '</ul>' +
        '<form id=needsForm>' +
        '<label for=aneed><input type=text name=aneed id=aneed></label>' +
        '<button type=button name=submitNeed id=submitNeed>Submit</button>' +
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
        'click #submitNeed' : 'registerNeeds'
    },

    registerNeeds: function() {
        var needsField = $('#aneed');
        var needs = needsField.val();
        APP.NFZ.needs.push( {label: needs, type: "needs", color: "yellow"} );
        $('#myNeeds').append('<li>' + needs + ' </li>');
        needsField.val("");
    }




});