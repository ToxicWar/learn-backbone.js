var Person = Backbone.Model.extend({
    defaults: {
        first_name: 'Anton',
        last_name: 'Larkin',
        age: 19,
        occupation: 'python/django developer'
    },

    validate: function(attrs) {
        if (attrs.age < 0) {
            return 'Age must be positive.';
        }

        if (!attrs.first_name || !attrs.last_name) {
            return 'Every person must have a first name and last name.';
        }
    },

    work: function() {
        return this.get('first_name') + ' ' + this.get('last_name') + ' is working.';
    }
});
