// function sayHelloTOUser() {
//   alert("hello user ypu re welshdfasiohfailk");
// }

// using the console
// variable declaration
// data types

// java script is a zero based index language
// it's loosely typed
// its also case sensitive
// 123456789
// Case
// case

// variable decleration

let namE = "john";
let school = "bafuto";

// variable declarator
// var (es5)
// let
// const

console.log(school);
// var userName = "john maxwell";
// console.log(userName);
const lastName = "Doe";
console.log(typeof lastName);

namE = "tunde";
namE = "sharon";

// console.log(haveMOney);

// let allows the value of a vaarioble  reasignable

// let nAmE = "jsjdkl"

// data types

// primitive
// non primitve

// primitive
// string
// number
// boolean
// undefined
// null
// object
// symbols
//

// non primitive
// arrays
// functions
// date/time
// conditionals

// primitive
// string
// set characters in a double or single quote
// let val = "sdfjksdjflksjkljsfskl228";

// console.log(typeof val);

// number
// let sum = (100 / 10) * 5 - 2 + 20;
// console.log(sum);

// boolean

// is a true or false statement

let married = true;

// undefined is variable with no value

let somethig;

console.log(somethig);

// null non existance or intentions set value

// console.log(localStorage.getItem("item"));

// let user = null;
// console.log(user);

// object a make up of properties

let onyinyechukwu = {
  haveLaptop: true,
  complextion: "very dark",
  age: 18,
  status: "flirt",
  accountBalance: null,
  wearsGlasses: "yes",
};

console.log(onyinyechukwu.status);

let user = "john doe";
const user2 = "James smith";

// user = "sango";
// user2 = "avater";

console.log(user);

let age = 20.0;
console.log(typeof age);
console.log(typeof user);

const haveMoney = false;

console.log(typeof haveMoney);
console.log(localStorage.getItem("item"));

let danger = null;
console.log(danger);

let something;

console.log(something);

let car = {
  engine: true,
  seat: true,
  seatNumber: 4,
  brand: "m/benz",
  color: "black",
  transactionBanks: ["zenith", "first bank", "asccess"],
  owerNameDetails: {
    name: "promise",
    age: 16,
    isVerified: true,
    status: "single",
  },
};

car.wheels = 2;
car.engine = false;
console.log(car);

// car.wheels = "alloy wheels";
// car.seatNumber = 5;

// let { engine, seat, brand } = car;

// console.log(engine, seat, brand);
// console.log(car);
// console.log(seat);

// non primitive data types
// arrays
// date/time
// functions
// conditionals

// array is a series of values assigned to a single variable

let items = ["rice", "beans", { son: "james" }, 10, true, false, { Dob: 100 }];

console.log(items[2].name);

let [three, one] = items;
console.log(items[6].Dob);

// console.log(items);

// what is a function ?  is a block of code containing an alghorithm
// is a sequence of commands of instructions to perform or execute a task or solve a problem

// proprties

// declaration
// name
// parameter
// function block
// return
// invocation

// let name = "somentijsjs";
// function greetUser(user) {
//   console.log("hello you are welcome" + " " + user);
// }

// greetUser("james smith");

// greetUser("john");

// greetUser("emmanuel");

// console.log("hello you are welcome");

// function logToConsole() {

// }
// method

// const log = {
//   toConsole: function (data) {
//     console.log(data);
//   },
// };

// log.toConsole("hello world");
// console.warn("stop");

function add(number1, number2) {
  console.log(`the answer  ${number1 + number2}`);
}

add(10, 50);

// string methods
// number methods
// ararys

// string method

// concactination

let firstName = "john";
let lastNamE = "doe";
let fullName = firstName + " " + lastNamE;
// console.log(fullName);

let number1 = 10;
let number2 = 50;

// template literals

fullName = `this is ${firstName} ${lastNamE} he i the founder ,the sum  is ${
  number1 + number2
} `;
console.log(fullName);
