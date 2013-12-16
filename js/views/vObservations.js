//vObservations.js
//view for making observations at

APP.ObservationView = Backbone.View.extend ({

    tagName: "div",

    el: "#guts",

    className: "panel",

    template: Handlebars.compile (
        
        '<h3 class=panel-heading>Observations</h3>' +
        '<form id=observationForm class=panel-body>' +
        '<label for=observation><input type=text name=observation id=observation></label>' +
        '<button type=button name=submitObservation id=submitObservation>Submit</button>' +
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
        'click #submitObservation' : 'registerObservation'
    },

    registerObservation: function() {
        var observationField = $('#observation');
        var observation = observationField.val();
        APP.NFZ.observations.push( {label: observation, type: "observations", color: "blue"} );
        $('#myObservations').append('<li>' + observation + ' </li>');
        observationField.val("");
    }




});