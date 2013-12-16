//vObservations.js
//view for making observations at

APP.ObservationView = Backbone.View.extend ({

    tagName: "div",

    el: "#guts",

    className: "panel",

    template: Handlebars.compile (
        
        '<h3 class=panel-heading>Observations</h3>' +
        '<p>When we can observe a situation and express this observation to someone —without judgment or evaluation mixed in—we open the door to further conversation and greater connection. Much depends on our ability to separate what we see and hear from our opinions, beliefs, and evaluations. </p>' +
        '<p>' +
        '<h4>Check it out for yourself:</h4>' +
        '<p>Listen for observations that are separate from evaluations. Notice how you respond to each. Test your ability to observe. Try describing only what a video camera (or audio recorder) would record.</p>' +
        '<form id=observationForm class=panel-body>' +
        '<label for=observation><input type=text name=observation id=observation></label>' +
        '<button type=button name=submitObservation id=submitObservation class=btn>Submit</button>' +
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