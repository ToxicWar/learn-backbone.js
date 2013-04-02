// Person Model
var Person = Backbone.Model.extend({
    defaults: {
        first_name: 'Anton',
        last_name: 'Larkin',
        age: 19,
        occupation: 'python/django developer'
    }
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});


// View for all people
var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    render: function() {
        this.collection.each(function(person) {
            var personView = new PersonView({ model: person });
            this.$el.append(personView.render().el);
        }, this);

        return this;
    }
});

// The View for a Person
var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#person-template').html()),

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    }
});

var peopleCollection = new PeopleCollection([
    {
        first_name: 'Anton',
        last_name: 'Larkin',
        age: 19
    },
    {
        first_name: 'Mabel',
        last_name: 'Pines',
        age: 20
    },
    {
        first_name: 'Dipper',
        last_name: 'Pines',
        age: 21
    }
]);

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);