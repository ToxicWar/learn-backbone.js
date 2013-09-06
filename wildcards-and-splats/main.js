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
			'download/*filename': 'download',
			'search/:query': 'search',
			'*other': 'default'
		},

		index: function() {
			console.log('hi there from the index page');
		},

		show: function(id) {

		},

		download: function(filename) {
			console.log(filename);
		},

		search: function(query) {

		},

		default: function(other) {
			alert('Hmmm..not sure what you need here? You accessed to: ' + other);
		}

	});

	new App.Router;
	Backbone.history.start();

})();