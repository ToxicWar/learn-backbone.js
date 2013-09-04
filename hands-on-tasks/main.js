(function() {

    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    window.template = function(id) {
    return _.template( $('#' + id).html() );
    };

    App.Models.Task = Backbone.Model.extend({
        validate: function(attrs) {
            if (!$.trim(attrs.title)) {
                return 'A task requires a valid title.';
            }
        }
    });

    App.Collections.Tasks = Backbone.Collection.extend({
        model: App.Models.Task
    });

    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',

        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function(task) {
            var taskView = new App.Views.Task({model:task});
            this.$el.append(taskView.render().el);
        }
    });

    App.Views.Task = Backbone.View.extend({
        tagName: 'li',

        template: template('taskTemplate'),

        initialize: function() {
            // _.bindAll(this, 'editTask', 'render');
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
        },

        events: {
            'click .edit': 'editTask',
            'click .delete': 'destroy'
        },

        editTask: function() {
            var newTaskTitle = prompt('What would you like change the text to?', this.model.get('title'));

            if (!newTaskTitle) return;

            this.model.set('title', newTaskTitle);
        },

        destroy: function() {
            this.model.destroy();
        },

        remove: function() {
            this.$el.remove();
        },

        render: function() {
            var template = this.template(this.model.toJSON());
            this.$el.html(template);
            return this;
        }
    });

    window.tasksCollection = new App.Collections.Tasks([
        {
            title: 'Go to the store',
            priority: 4
        },
        {
            title: 'Go to the mail',
            priority: 3
        },
        {
            title: 'Get to work',
            priority: 5
        }
    ]);

    var taskView = new App.Views.Tasks({collection: tasksCollection})
    $(".tasks").html(taskView.render().el);

})();