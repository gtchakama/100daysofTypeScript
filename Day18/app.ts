function add(n1:number, n2: number) {
    return n1 + n2;
}

function printResult(num:number) {
    console.log('Result: ' + num);
}
printResult(add(5,7));

let combinedValue: Function;
combinedValue = add;
console.log(combinedValue(8,7));

function addAndHandle(n1:number, n2:number, cb:(num:number)) {
    const result = n1 + n2;
    cb(result);
}