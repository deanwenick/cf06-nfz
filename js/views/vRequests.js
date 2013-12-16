//vRequest.js
//view for formulating and making a request
//visible on main page and last page

APP.RequestView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (
        
        '<h3>Make a request</h3>' +
        '<h4>A request is stated in action language.</h4><p>Action language means asking for what we want people “to do” rather than what we want them “to be.” “Would you be willing to lower your voice while I’m reading?” (what to do) “Would you be more respectful of others?” (what to be)</p><p>A request asks for an action that is present, specific, and concrete.Would be willing to take five minutes now to put your things away?”(present, specific, concrete)“Would you keep your desk neat from now on?”(future, not specific, not concrete)</p><h4>Check it out for yourself:</h4><p>When you make a request, ask yourself: Does it ask for what I do want, not what I don’t want? Does it ask for action now? Is it specific and concrete? Notice how you feel when you make a request. Notice your response when others make a request.</p> ' +
        '<form id=requestForm>' +
        '<label for=request><input type=text name=request id=request></label>' +
        '<button type=button name=submitRequest id=submitRequest class=btn>Submit</button>' +
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
        'click #submitRequest' : 'registerRequest'
    },

    registerRequest: function() {
        var requestField = $('#request');
        var request = requestField.val();
        APP.NFZ.requests.push( {label: request, type: "requests", color: "blue"} );
        $('#myRequests').append('<li>' + request + ' </li>');
        requestField.val("");
    }

});