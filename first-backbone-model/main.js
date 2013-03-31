var Person = Backbone.Model.extend({
    defaults: {
        first_name: 'Anton',
        last_name: 'Larkin',
        age: 19,
        occupation: 'python/django developer'
    },

    work: function() {
        return this.get('first_name') + ' ' + this.get('last_name') + ' is working.';
    }
});
