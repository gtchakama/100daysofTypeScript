"use strict";
// let person : {
//     name: string,
//     age: number
// } = {
//     name: "George ",
//     age : 22
// }
// console.log(person);
var person = {
    name: "George ",
    age: 22,
    hobbies: ['Sports', 'Cooking', 'Programming'],
    role: [2, 'Actor']
};
person.hobbies.push('Music');
person.role.push('Hero');
person.role.push(4);
console.log(person.role);
// for (const hobby of person.hobbies) {
//     console.log(hobby);
// }
