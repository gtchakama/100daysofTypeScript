"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var human = {
    name: "George ",
    age: 22,
    hobbies: ['Sports', 'Cooking', 'Programming'],
    role: 'ADMIN'
};
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
console.log(Role);
