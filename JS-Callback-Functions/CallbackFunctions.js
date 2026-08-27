// Callback Functions

// 1. Function Reference vs Function Call

function introduce(name) {
  console.log(`Hello, ${name}!`);
}
function processUser(callback) {
  const name = "Elman";
  callback(name);
}

// Pass the function itself
processUser(introduce);

// Don't call the function here!!!
// processUser(introduce());

// 2. Basic Callback

function calculate(a, b, operation) {
  return operation(a, b);
}
function add(a, b) {
  return a + b;
}
console.log(calculate(10, 20, add));

// 3. Different Callbacks

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
console.log(calculate(10, 20, subtract));
console.log(calculate(10, 20, multiply));

// 4. Anonymous Callback

console.log(
  calculate(10, 20, function (a, b) {
    return a / b;
  }),
);

// 5. Arrow Function Callback

console.log(calculate(10, 20, (a, b) => a ** b));

// 6. Callback with forEach()

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// 7. Arrow Callback with forEach()

numbers.forEach((number) => {
  console.log(number * 2);
});

// 8. Callback with map()

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);

// 9. Callback with filter()

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);

// 10. Callback with find()

const foundNumber = numbers.find((number) => {
  return number > 3;
});
console.log(foundNumber);

// 11. Callback with reduce()

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(total);

// 12. Synchronous Callback

function first(callback) {
  console.log("First function");
  callback();
  console.log("First function finished");
}
function second() {
  console.log("Callback function");
}
first(second);

// 13. Asynchronous Callback

console.log("Start");
setTimeout(() => {
  console.log("Async callback executed");
}, 2000);
console.log("End");

// 14. Event Callback

// Run this in a browser
/*
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked");
});
*/

// 15. Callback with Custom Data

function getUser(callback) {
  const user = {
    name: "Elman",
    role: "Web Developer",
  };
  callback(user);
}
getUser((user) => {
  console.log(`${user.name} is a ${user.role}`);
});

// 16. Callback with Multiple Results

function processNumbers(numbers, callback) {
  return numbers.map(callback);
}
const squaredNumbers = processNumbers([1, 2, 3, 4], (number) => number ** 2);
console.log(squaredNumbers);

// 17. Higher-Order Function

function execute(callback) {
  console.log("Executing callback...");
  callback();
}
execute(() => {
  console.log("Task completed");
});

// 18. Callback Hell

/*
loginUser(user, () => {
  getUserPosts(() => {
    getPostComments(() => {
      sendNotification(() => {
        console.log("Everything completed");
      });
    });
  });
});
*/

// Callback Flow

/*
Function A
    ↓
Pass Function B
    ↓
Function A Executes
    ↓
Function B Is Called
*/
