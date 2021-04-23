//Interfaces

interface IsPerson {
  name: string;
  age: number;
  speak:(a:string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'George',
  age: 22,
  speak:(text: string): void {
    console.log((text));
    
  }

  spend(amount: number): number{
    console.log('i spent ', amount);
    return amount;
  }
}

console.log(me);

import {Invoice} from './classes/invoice.js';
class Invoice {

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format(){
    return `${this.client} owes $ ${this.amount} for ${this.details}`
  }
}

const InvOne =new Invoice("Mr Chakama","work done on the website",200);
const InvTwo =new Invoice("Sir Gerald","work done on the website",340);

let invoices: Invoice[]= [];

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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value , 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});