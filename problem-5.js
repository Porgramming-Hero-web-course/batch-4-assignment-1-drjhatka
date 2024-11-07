/*
Write a generic function getProperty that takes an object
and a property name as arguments and returns the property value.
Add a constraint to ensure the property name exists on the object.
*/
var getProperty = function (obj, key) {
    return obj[key];
};
var user1 = {
    name: 'John',
    userId: 5555,
    email: 'john_dev@gmail.com'
};
console.log(getProperty(user1, 'name'));
