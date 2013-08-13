(function() {

    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    window.template = function(id) {
    return _.template( $('#' + id).html() );
    };

    // Person Model
    App.Models.Person = Backbone.Model.extend({
        defaults: {
            first_name: 'Anton',
            last_name: 'Larkin',
            age: 19,
            occupation: 'python/django developer'
        }
    });

    // A List of People
    App.Collections.People = Backbone.Collection.extend({
        model: App.Models.Person
    });


    // View for all people
    App.Views.People = Backbone.View.extend({
        tagName: 'ul',

        render: function() {
            this.collection.each(function(person) {
                var personView = new App.Views.Person({ model: person });
                this.$el.append(personView.render().el);
            }, this);

            return this;
        }
    });


    // The View for a Person
    App.Views.Person = Backbone.View.extend({
        tagName: 'li',

        template: template('person-template'),

        render: function() {
            this.$el.html( this.template(this.model.toJSON()) );
            return this;
        }
    });


    peopleCollection = new App.Collections.People([
        {
            first_name: 'Anton',
            last_name: 'Larkin',
            age: 19,
            occupation: 'Python/Django developer'
        },
        {
            first_name: 'Mabel',
            last_name: 'Pines',
            age: 12,
            occupation: 'Employee at the Mystery Shack'
        },
        {
            first_name: 'Dipper',
            last_name: 'Pines',
            age: 12,
            occupation: 'Employee at the Mystery Shack'
        }
    ]);

    var peopleView = new App.Views.People({ collection: peopleCollection });
    $(document.body).append(peopleView.render().el);

})();