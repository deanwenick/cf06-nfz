//vBoard.js
//view for whole board
//visible on main page and last page

APP.ObservationView = Backbone.View.extend ({

    el: "#guts",

    template: Handlebars.compile (
        
        '<form id=observationForm>' +
        '<label for=observation><input type=text name=observation id=observation></label>' +
        '<button type=button>Submit</button>' +
        '</form>' +
        '<ul id=myObservations></ul>'

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
        'click button' : 'registerObservation'
    },

    registerObservation: function() {
        var observationField = $('#observation');
        var observation = observationField.val();
        APP.NFZ.observations.push( {label: observation, type: "observations", color: "blue"} );
        $('#myObservations').append('<li>' + observation + ' </li>');
        observationField.val("");
    }




});