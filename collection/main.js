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

// The View for a Person
var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#person-template').html()),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
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

console.log(peopleCollection);