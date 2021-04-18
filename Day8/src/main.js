"use strict";
console.log(greetNamed("John"));
console.log(greetUnnamed("John"));
function greetNamed(name) {
    if (name) {
        return "Hi! " + name;
    }
}
var greetUnnamed = function (name) {
    if (name) {
        return "Hi! " + name;
    }
};
