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

    template: _.template("<strong><%= first_name %> <%= last_name %></strong> (<%= age %>) - <%= occupation %>"),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

var person = new Person();
var personView = new PersonView({ model: person });