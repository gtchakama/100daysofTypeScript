function printId(id: number | string) {
    if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
    } else {
    // Here, id is of type 'number'
    console.log(id);
    }
    }

printId('Twenty');

function combine(input1:number | string,input2:number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString()
    }
    return result;
}

console.log(combine(2,4));
console.log(combine('George ',"Chakama"));


