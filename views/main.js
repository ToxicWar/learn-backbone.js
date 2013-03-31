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

    initialize: function() {
        this.render();
    },

    render: function() {
        // anti-pattern
        this.$el.html(this.model.get('first_name') + ' ' + this.model.get('last_name') +
            ' (' + this.model.get('age') + ') - ' + this.model.get('occupation'));
    }
});

var person = new Person();
var personView = new PersonView({ model: person });