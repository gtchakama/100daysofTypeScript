"use strict";
var userInput;
var userName;
userInput = 54;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred! ma1', 500);
