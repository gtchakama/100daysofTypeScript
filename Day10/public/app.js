"use strict";
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $ " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var InvOne = new Invoice("George", "work done on the website", 200);
var InvTwo = new Invoice("Gerald", "work done on the website", 340);
var invoices = [];
invoices.push(InvOne);
invoices.push(InvTwo);
InvOne.amount = 500;
console.log(invoices);
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
