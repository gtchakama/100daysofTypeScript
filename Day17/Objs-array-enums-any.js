"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'George',
    age: 22,
    hobbies: ['coding', 'jogging', 'music'],
    role: Role.READ_ONLY
};
var favActivities;
favActivities = ['sports'];
console.log(person);
