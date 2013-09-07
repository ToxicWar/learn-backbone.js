(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	var vent = _.extend({}, Backbone.Events);


	App.Views.Appointment = Backbone.View.extend({
		initialize: function() {
			vent.on('appointment:show', this.show, this);
		},

		show: function(id) {
			console.log('showing the appointment with the id of ' + id);
		}
	});

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'appointment/:id': 'showAppointment'
		},

		index: function() {
			console.log('hi there from the index page');
		},

		showAppointment: function(appointmentId) {
			vent.trigger('appointment:show', appointmentId);
		}
	});

	new App.Views.Appointment;

	new App.Router;
	Backbone.history.start();

})();