var Person = Backbone.Model.extend({
    defaults: {
        first_name: 'Anton',
        last_name: 'Larkin',
        age: 19,
        occupation: 'python/django developer'
    }
});

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

var person = new Person();
var personView = new PersonView({ model: person });

var person2 = new Person({ first_name: 'Jeffrey', last_name: 'Way', age: 27 });
var person2View = new PersonView({ model: person2 });