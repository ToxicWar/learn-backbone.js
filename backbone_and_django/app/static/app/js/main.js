(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	App.Models.Task = Backbone.Model.extend({
		defaults: {
			title: '',
			is_completed: false,
			id: ''
		},
		urlRoot: 'tasks'
	});

})();