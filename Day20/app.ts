let userInput : unknown;
let userName : string;
userInput = 5;
userInput  = 'Food';

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message:string, code: number): never {
    throw {message: message, ErrorCode: code };
}

// const result = generateError('An error occured!',500);

// console.log(result);

generateError('An error occured!',340);