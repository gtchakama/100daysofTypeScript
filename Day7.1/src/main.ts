let userInput : unknown;
let userName : string;

userInput = 54;
userInput = 'Max'


function generateError(message: string, code: number) {

    throw { message : message, errorCode: code};
}

generateError('An error occurred! ma1', 500);