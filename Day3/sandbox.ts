type stringOrNum = string | Number;
type ObjWithName = {name: string, uid: stringOrNum}

// const logDetails = (uid: String | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

// const greet = (user:{name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);  
// }

// const greett = (user:{name: string, uid: stringOrNum}) => {
//     console.log(`${user.name} says hello`);  
// }

const greet = (user : ObjWithName) => {
    console.log(`${user.name} says hello`);  
}

const greet02 = (user : ObjWithName) => {
    console.log(`${user.name} says hello`);  
}