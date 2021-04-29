"use strict";
// const person: {
//     name: string;
//     age: number
// } = {
//     name: 'George',
//     age: 22
// };
var person = {
    name: 'George',
    age: 22,
    hobbies: ['coding', 'jogging', 'music']
};
var favActivities;
favActivities = ['sports'];
console.log(person);
// console.log(person.age);
person.hobbies.forEach(function (hobby) {
    console.log(hobby.toUpperCase());
});
