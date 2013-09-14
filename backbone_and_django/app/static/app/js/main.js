(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	App.Models.Task = Backbone.Model.extend({
		defaults: {
			title: '',
			is_completed: false
		},
		urlRoot: 'tasks/'
	});

    App.Collections.Tasks = Backbone.Collection.extend({
        model: App.Models.Task,
        url: 'tasks/'
    });

    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        render: function() {
            this.$el.empty();
            this.collection.each(this.addOne, this)
            return this;
        },

        addOne: function(task) {
            var task = new App.Views.Task({model: task});
            this.$el.append(task.render().el);
        }
    });

    App.Views.Task = Backbone.View.extend({
        tagName: 'li',

        initialize: function() {
            this.model.on('destroy', this.remove, this);
        },

        render: function() {
           this.$el.html(this.model.get('title'));
           return this;
        }
    });

    window.tasksCollection = new App.Collections.Tasks;
    window.tasksCollection.fetch();

    var tasksView = new App.Views.Tasks({collection: tasksCollection})
	$(".tasks").html(tasksView.render().el);

})();