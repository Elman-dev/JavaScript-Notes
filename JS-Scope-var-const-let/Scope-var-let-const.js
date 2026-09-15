// Scope, var, let and const

// 1. Global Scope

var globalVar = "Global var";
let globalLet = "Global let";
const globalConst = "Global const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// 2. Function Scope

function testVar() {
  var message = "Hello from function";
  console.log(message);
}
testVar();

// console.log(message); // ReferenceError

// 3. Block Scope

if (true) {
  let blockLet = "Hello from block";
  const blockConst = "Hello from block";
  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError

// 4. var is not Block Scoped

if (true) var blockVar = "var ignores block scope";
console.log(blockVar);

// 5. Reassignment

var score = 10;
score = 20;
console.log(score);

let age = 19;
age = 20;
console.log(age);
const name = "Elman";

// name = "Matt"; // TypeError

// 6. Redeclaration

var username = "Elman";
var username = "Matt";
console.log(username); // SyntaxError

// const language = "JavaScript";
// const language = "TypeScript"; // SyntaxError

// 7. const and Objects

const user = {
  name: "Elman",
  role: "Developer",
};
user.role = "Data Engineer";
console.log(user);

// user = {}; // TypeError

// 8. Hoisting with var

console.log(hoistedVar);
var hoistedVar = "Hello";

// 9. Temporal Dead Zone (TDZ)

// console.log(hoistedLet); // ReferenceError
let hoistedLet = "Hello";
console.log(hoistedLet);

// 10. Scope in Loops

for (var i = 0; i < 3; i++) console.log(i);
console.log(i);

// for (let j = 0; j < 3; j++) {
// console.log(j);
// }

// console.log(j); // ReferenceError

// 11. var vs let in Closures

const varFunctions = [];

for (var x = 0; x < 3; x++) {
  varFunctions.push(function () {
    return x;
  });
}

console.log(varFunctions[0]());
console.log(varFunctions[1]());
console.log(varFunctions[2]());

// let creates a new binding for each loop iteration

const letFunctions = [];

for (let y = 0; y < 3; y++) {
  letFunctions.push(function () {
    return y;
  });
}

console.log(letFunctions[0]());
console.log(letFunctions[1]());
console.log(letFunctions[2]());

// 12. Practical Example

const appName = "Voxa";
let requestCount = 0;

requestCount++;
requestCount++;

console.log(appName);
console.log(requestCount);
