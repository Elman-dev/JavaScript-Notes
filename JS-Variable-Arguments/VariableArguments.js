// Variable Arguments in JavaScript

// Fixed Parameters
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// Missing Arguments
function introduce(name, age) {
  console.log(name);
  console.log(age);
}

introduce("Elman");

// arguments Object

function sumWithArguments() {
  let total = 0;
  for (const number of arguments) {
    total += number;
  }
  return total;
}
function checkArguments() {
  console.log(Array.isArray(arguments)); // false
}
console.log(sumWithArguments(10, 20, 30, 40));
checkArguments(1, 2, 3);

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40, 50));

// Named + Rest Parameters
function introduceWithSkills(name, ...skills) {
  console.log("Name:", name);
  console.log("Skills:", skills);
}
introduceWithSkills(
  "Elman",
  "JavaScript",
  "TypeScript",
  "React",
  "Web Security",
);

// Real Example
function calculateTotal(discount, ...prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);
  return total - discount;
}
console.log(calculateTotal(100, 500, 800, 1200));

// Array as Input
function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sumArray([10, 20, 30, 40]));

// Spread Syntax
const numbers = [10, 20, 30, 40];
function addFourNumbers(a, b, c, d) {
  return a + b + c + d;
}
console.log(addFourNumbers(...numbers));

// Rest vs Spread
function collect(...values) {
  console.log(values);
}
const values = [1, 2, 3];
collect(...values);
