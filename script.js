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
// displayMovements(movements)

// COMPUTING USERNAME
// const user = 'Steven Thomas Williams';
// const userName = user.toLocaleLowerCase().split(' ').map(firstWord => firstWord[0]).join('');
// console.log(userName);

// createUsername(accounts);

const createUsername = function(accs){
  accs.forEach((acc)=>{
    acc.username = acc.owner.toLocaleLowerCase().split(' ').map(firstWord => firstWord[0]).join('');
  })
}
createUsername(accounts);
console.log(accounts);

//CALACDISPLAYSUMMARY
const calcDisplaySummary = function(acc){
  const income = acc.movements.filter((mov)=>mov>0).reduce((acc,mov)=> acc+mov,0);
  labelSumIn.textContent =`${income}€`;

  const out = acc.movements.filter((mov)=> mov<0).reduce((acc,mov)=> acc+mov ,0);
  labelSumOut.textContent=`${Math.abs(out)}€`

  const intrest= movements.filter(mov => mov > 0).map(deposits => deposits*acc.interestRate/100).reduce((acc,int)=>acc+int,0);
  labelSumInterest.textContent = `${intrest}€`; 
}
// calcDisplaySummary(account1.movements);
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

//  const deposits = movements.filter((mov)=> mov >0);
//  console.log(deposits)

// const balance = movements.reduce((acc,cur,i,arr)=>{
//   console.log(`Itreation ${i}: ${acc} and Current_Value ${cur}`);
//   return acc+cur;
// },0);
// console.log(balance)

//CALCTOTAL BALANCE
const caclDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,mov) => acc + mov ,0);
  labelBalance.textContent = `${acc.balance} €`;
}

// caclDisplayBalance(account1.movements);
const updateUI = function(acc){

   // DISPLAY MOVEMENTS
   displayMovements(acc.movements);

   //DISPLAY BALANCE

   caclDisplayBalance(acc);


   //DISPLAY SUMMARY
 calcDisplaySummary(acc);
}

//IMPLMEATION OF LOGIN
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  // console.log(inputLoginUsername.value);
  currentAccount = accounts.find(acc => acc.username ===inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin == Number(inputLoginPin.value)){
    // console.log("LOGIN");

    //CLEAR INPUT FIELDS
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //DISPLAY UI MESSAGE
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

   updateUI(currentAccount)
  }
})

// IMPLEMENATION OF TRANSFER
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(reciverAcc);
  inputTransferTo.value =  inputTransferAmount.value = '';
  inputTransferAmount.blur();
  
  //conditions
  if(amount > 0 && reciverAcc && currentAccount.balance >= amount && reciverAcc?.username !== currentAccount.username){
    // console.log("Transfer Valid");
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
})


// CLOSING ACCOUNT
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(currentAccount.username ===inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
    // console.log("hiiiiiiiiiiiiiiiiiiii");
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // console.log(index);

    //DELETE ACCOUNT
    accounts.splice(index,1);
    // console.log(accounts)

    // UPDATE  UI
    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = 0;
  }
})


// LOAN FUNCTIONN
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount*0.1));
  {
    movements.push(amount);
    //UPDATE UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value ='';
})


//Magic Chaning Methods

// const uroTOUsd = 1.1;
// const totalaBalanceUSD = movements.filter( mov => mov > 0).map(mov => mov*uroTOUsd).reduce((acc,mov)=> acc+mov ,0);
// console.log(totalaBalanceUSD);


//FIND METHOD
console.log(accounts);
const account = accounts.find(acc=>acc.owner ==='Steven Thomas Williams');
console.log(account)






 






