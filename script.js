'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a','b','c','d','e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice());

//SPLICE
console.log(arr.splice(2));
console.log(arr)
console.log(arr.splice(-1));

//REVERSE
arr=[5,4,3,2,1];
console.log(arr.reverse());

//CONACT 
let arr2=[12,56,78,90];
 

//JION
// console.log(something.join('-'));

// Array At Method
console.log(arr.at(0));

movements.forEach((mov,i,arr)=>{
  if(mov >0 ){
    console.log(`Movements ${i} : You Deposited ${mov}`);
  }
  else{
    console.log(`Movements ${i} : You Withdrew ${Math.abs(mov)}`);
  }
});

 // <div class="movements__date">3 days ago</div>
// MAIN APPLICATION
const displayMovements = function(movements){
  containerMovements.innerHTML = ' ';
  movements.forEach((mov,i)=>{
    const type = mov >0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type} deposit</div>
    <div class="movements__value">${mov}€</div>
  </div>


    `
    containerMovements.insertAdjacentHTML('afterbegin',html);
  })

}

// displayMovements(account1.movements);

// const uroTOUsd = 1.1;
//  const movementUSD = movements.map((mov)=> mov*uroTOUsd);
// //  console.log(movements);
// //  console.log(movementUSD);

// const movementDescription = movements.map((mov,i)=>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov
//   )}`
// )
// console.log(movementDescription);
