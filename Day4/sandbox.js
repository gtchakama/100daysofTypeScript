"use strict";
// let gree: Function;
var meet = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
