"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Food';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, ErrorCode: code };
}
// const result = generateError('An error occured!',500);
// console.log(result);
generateError('An error occured!', 340);
