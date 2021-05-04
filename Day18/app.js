"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 7));
var combinedValue;
combinedValue = add;
console.log(combinedValue(8, 7));
