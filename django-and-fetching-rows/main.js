(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	App.Views.Task = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false,
			id: ''
		},
		urlRoot: 'tasks'
	});

})();