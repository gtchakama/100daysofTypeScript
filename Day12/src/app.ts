//Classes
class Invoice {
  // readonly client : string;
  // private details: string;
  // public amount: number;

  

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {  }
  format(){
    return `${this.client} owes $ ${this.amount} for ${this.details}`
  }
}

const InvOne =new Invoice("George","work done on the website",200);
const InvTwo =new Invoice("Gerald","work done on the website",340);

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
console.log(form.children);

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