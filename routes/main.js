(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'show/:id': 'show',
		},

		index: function() {
			console.log('hi there from the index page');
		},

		show: function(id) {
			console.log('show route');
		}
	});

	new App.Router;
	Backbone.history.start();

})();