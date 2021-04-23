//Interfaces
const me = {
    name: 'George',
    age: 22,
    speak: (text) => {
        console.log((text));
    },
    spend: (amount) => {
        console.log('i spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
// console.log(me);
import { Invoice } from './classes/invoice.js';
const InvOne = new Invoice("Mr Chakama", "work done on the website", 200);
const InvTwo = new Invoice("Sir Gerald", "work done on the website", 340);
let invoices = [];
invoices.push(InvOne);
invoices.push(InvTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
