// const person: {
//     name: string;
//     age: number
// } = {
//     name: 'George',
//     age: 22
// };
const person =  {
    name: 'George',
    age: 22,
    hobbies: ['coding','jogging','music']
};

let favActivities: string [];
favActivities = ['sports'];


console.log(person);
// console.log(person.age);

person.hobbies.forEach(hobby => {
    console.log(hobby.toUpperCase());    
});