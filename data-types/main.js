var Person = function(config) {
    this.first_name = config.first_name;
    this.age = config.age;
    this.hobby = config.hobby;
};

Person.prototype.work = function() {
    return this.first_name + ' is working.';
};