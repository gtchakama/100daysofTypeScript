// let person : {
//     name: string,
//     age: number
// } = {
//     name: "George ",
//     age : 22
// }
// console.log(person);

let person: {
    name : string,
    age : number,
    hobbies: string[],
    role : [number, string] //Tuple - tells TS that you wantg a special array with 2 dif data types
} = {
    name: "George ",
    age : 22,
    hobbies: ['Sports','Cooking','Programming'],
    role: [2,'Actor']
};

person.hobbies.push('Music');
person.role.push('Hero');
person.role.push(4)
console.log(person.role);


// for (const hobby of person.hobbies) {
//     console.log(hobby);
// }