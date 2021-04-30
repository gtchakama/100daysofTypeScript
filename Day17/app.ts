// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const person =  {
    name: 'George',
    age: 22,
    hobbies: ['coding','jogging','music'],
    role: Role.READ_ONLY
};


console.log(person);
