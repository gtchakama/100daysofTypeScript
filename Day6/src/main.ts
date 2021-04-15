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
    role : [number, string]
} = {
    name: "George ",
    age : 22,
    hobbies: ['Sports','Cooking'],
    role: [2,'Actor']
};

person.hobbies.push('Music');

console.log(person);


// for (const hobby of person.hobbies) {
//     console.log(hobby);
// }