//vRequest.js
//view for formulating and making a request
//visible on main page and last page

APP.RequestView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (
        
        '<h3>Make a request</h3>' +
        '<form id=requestForm>' +
        '<label for=request><input type=text name=request id=request></label>' +
        '<button type=button>Submit</button>' +
        '</form>' +
        '<ul id=myRequests></ul>'

        ),

    initialize: function() {
        //this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function(model) {
        //var attributes = this.model.attributes;
        //this.$el.html(this.template(attributes));
        this.$el.html(this.template());
    },

    events: {
        'click button' : 'registerRequest'
    },

    registerRequest: function() {
        var observationField = $('#request');
        var request = requestField.val();
        APP.NFZ.requests.push( {label: request, type: "requests", color: "blue"} );
        $('#myRequests').append('<li>' + request + ' </li>');
        requestField.val("");
    }

});