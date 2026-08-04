// Type Conversion

// String Concatenation (+)

console.log("2" + 7); // "27"
console.log("2" + true); // "2true"
console.log("2" + undefined); // "2undefined"
console.log("2" + null); // "2null"

// Arithmetic Conversion

console.log("7" - 2); // 5
console.log("7" * 2); // 14
console.log("7" / 2); // 3.5

// Invalid Number Conversion

console.log("Elman" - "Mahdavian"); // NaN
console.log("Elman" * 9); // NaN

// Boolean Conversion

console.log("2" + true); // "2true"
console.log("2" + false); // "2false"

console.log("2" - true); // 1
console.log("2" - false); // 2

console.log("2" * true); // 2
console.log("2" * false); // 0

console.log("2" / true); // 2
console.log("2" / false); // Infinity

// undefined

console.log("2" - undefined); // NaN
console.log("2" * undefined); // NaN
console.log("2" / undefined); // NaN

// null

console.log("2" + null); // "2null"
console.log("2" - null); // 2
console.log("2" * null); // 0
console.log("2" / null); // Infinity

// Explicit Conversion

console.log(Number("123")); // 123
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(String(123)); // "123"
console.log(String(true)); // "true"

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Elman")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
