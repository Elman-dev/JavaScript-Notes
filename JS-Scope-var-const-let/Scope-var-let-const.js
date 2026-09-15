// Scope, var, let and const

// 1. Global Scope

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am global too";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// 2. Function Scope

function testVar() {
  var message = "var is function-scoped";
  console.log(message);
}
testVar();

// console.log(message); // ReferenceError

// 3. Block Scope

if (true) {
  let blockLet = "let is block-scoped";
  const blockConst = "const is block-scoped";

  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError

// 4. var ignores Block Scope

if (true) var blockVar = "var can escape a block";
console.log(blockVar);

// 5. Lexical Scope

const outerValue = "I am outside";

function showOuterValue() {
  console.log(outerValue);
}
showOuterValue();

// 6. Nested Scope

const globalValue = "global";
function outerFunction() {
  const outerValue = "outer";

  if (true) {
    const innerValue = "inner";
    console.log(globalValue);
    console.log(outerValue);
    console.log(innerValue);
  }
}
outerFunction();

// 7. Shadowing

let shadowedName = "Global";

function testShadowing() {
  let shadowedName = "Local";
  console.log(shadowedName);
}
testShadowing();

console.log(shadowedName);

// 8. Redeclaration

var userName = "Elman";
var userName = "Matt";

console.log(userName);

// let age = 19;
// let age = 20; // SyntaxError

// const language = "JavaScript";
// const language = "TypeScript"; // SyntaxError

// 9. Reassignment

var score = 10;
score = 20;
console.log(score);

let level = 1;
level = 2;
console.log(level);
const country = "Iran";

// country = "UK"; // TypeError

// 10. const with Objects

const user = {
  name: "Elman",
  role: "Web Developer",
};
user.role = "Web Security Engineer";
console.log(user);

// user = {}; // TypeError

// 11. const with Arrays

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// numbers = [10, 20]; // TypeError

// 12. Hoisting with var

console.log(hoistedVar); // undefined

var hoistedVar = "var was hoisted";
console.log(hoistedVar);

// 13. Hoisting with let and const

// console.log(hoistedLet); // ReferenceError
// console.log(hoistedConst); // ReferenceError

let hoistedLet = "initialized later";
const hoistedConst = "also initialized later";

console.log(hoistedLet);
console.log(hoistedConst);

// 14. Loop Scope with var

for (var i = 0; i < 3; i++) console.log(i);

console.log("var i:", i); // 3

// 15. Loop Scope with let

for (let j = 0; j < 3; j++) console.log(j);

// console.log(j); // ReferenceError

// 16. const in a for...of loop

for (const item of ["HTML", "CSS", "JavaScript"]) console.log(item);

// 17. Closures: var vs let

var varFunctions = [];
for (var x = 0; x < 3; x++) {
  varFunctions.push(function () {
    return x;
  });
}
console.log(
  "var closure:",
  varFunctions[0](),
  varFunctions[1](),
  varFunctions[2](),
);

// 3 3 3

let letFunctions = [];
for (let y = 0; y < 3; y++) {
  letFunctions.push(function () {
    return y;
  });
}
console.log(
  "let closure:",
  letFunctions[0](),
  letFunctions[1](),
  letFunctions[2](),
);

// 0 1 2

// 18. Practical Example

function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  let total = price + tax;

  if (total > 100) {
    let discount = 10;
    total -= discount;
    console.log("Discount applied:", discount);
  }
  return total;
}
console.log(calculateTotal(100, 0.1));
console.log(calculateTotal(200, 0.1));

// 19. Practical Rule

const appName = "Voxa";
let requestCount = 0;
requestCount++;

console.log(appName);
console.log(requestCount);

// Modern rule:
// const -> default choice
// let -> when reassignment is needed
// var -> usually avoid in modern JavaScript
