"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
//# sourceMappingURL=app.js.map