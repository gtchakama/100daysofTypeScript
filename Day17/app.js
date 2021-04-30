"use strict";
var result;
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(22, 17);
console.log(combinedAges);
var combinedNames = combine('George ', 'Gerald');
console.log(combinedNames);
