// const person: {
//     name: string;
//     age: number
// } = {
//     name: 'George',
//     age: 22
// };
const person: {
    name: string,
    age:number,
    hobbies:string[],
    role:[number,string]
} =  {
    name: 'George',
    age: 22,
    hobbies: ['coding','jogging','music'],
    role: [2,'author'] //union type
};

person.role.push('Runner');
person.role[0] = 40;

let favActivities: string [];
favActivities = ['sports'];


// console.log(person);
// console.log(person.age);

// person.hobbies.forEach(hobby => {
//     console.log(hobby.toUpperCase());    
// });

console.log(person.role);
