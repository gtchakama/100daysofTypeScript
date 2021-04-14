"use strict";
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var user = {
    name: "",
    password: "" // error property password is missing
};
user.name = 'George Chakama';
console.log(user.name);
// Done
