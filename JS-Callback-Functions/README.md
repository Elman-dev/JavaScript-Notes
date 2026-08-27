# JavaScript Callback Functions

> A practical guide to understanding Callback Functions in JavaScript, including function references, synchronous and asynchronous callbacks, Array method callbacks, and Higher-Order Functions.

---

## Callback Function چیه؟

تو JavaScript، تابع‌ها **First-Class Citizens** هستن؛ یعنی می‌تونیم یه تابع رو داخل یه متغیر ذخیره کنیم، به‌عنوان آرگومان به یه تابع دیگه ارسال کنیم و از یه تابع دیگه برگردونیم.

وقتی یه تابع رو به‌عنوان آرگومان به تابع دیگه ارسال کنیم و اون تابع بعداً اجرا بشه، به اون **Callback Function** می‌گیم.

به زبان ساده تر:

> Callback تابعی هستش که به تابع دیگه ای داده می‌شه تا در زمان مناسب توسط اون تابع اجرا بشه.

---

## Function Reference vs Function Call

یکی از مهم‌ترین نکات برای درک Callbackها، تفاوت بین **ارجاع به تابع** و **اجرای تابع** هستش.

فرض کنید این تابع رو داریم:

```javascript
function introduce(name) {
  console.log(`Hello, ${name}!`);
}
```

و یه تابع دیگه که یه Callback دریافت می‌کنه:

```javascript
function processUser(callback) {
  const name = "Elman";

  callback(name);
}
```

### Function Reference

```javascript
processUser(introduce);
```

اینجا تابع`introduce` اجرا نمی‌شه.

ما فقط خود تابع رو به `processUser` ارسال می‌کنیم.

و بعد `processUser` اون رو اجرا می‌کنه:

```javascript
callback(name);
```

### Function Call

```javascript
processUser(introduce());
```

اینجا `introduce()` همون لحظه اجرا می‌شه و نتیجه‌ی اجرای اون به `processUser` ارسال میشه.

پس:

```javascript
introduce;
```

یعنی:

> Pass the function.

و:

```javascript
introduce();
```

یعنی:

> Execute the function.

---

## Basic Callback

یک مثال ساده:

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

console.log(calculate(10, 20, add));
```

خروجی:

```text
30
```

جریان اجرای برنامه:

```text
calculate(10, 20, add)
        ↓
operation = add
        ↓
operation(10, 20)
        ↓
add(10, 20)
        ↓
30
```

در این مثال:

- `calculate` یه Higher-Order Function عه.
- `operation` پارامتری هستش که یه Function دریافت می‌کنه.
- `add` یه Callback Function عه.

---

## Using Different Callbacks

یکی از مزیت های Callbackها این عه که می‌تونیم رفتار یه تابع رو بدون تغییر خود اون تابع تغییر بدیم.

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, subtract));
console.log(calculate(10, 20, multiply));
```

خروجی:

```text
30
-10
200
```

تابع `calculate` همیشه یکسان عه، ولی نتیجه بر اساس Callback تغییر می‌کنه.

---

## Anonymous Callback

لازم نیست همیشه Callback رو بصورت یه تابع جداگانه تعریف کنیم.

می‌تونیم مستقیماً یه تابع ناشناس رو ارسال کنیم:

```javascript
console.log(
  calculate(10, 20, function (a, b) {
    return a / b;
  }),
);
```

خروجی:

```text
0.5
```

این تابع اسم مشخصی نداره و فقط برای همون فراخوانی استفاده می‌شه.

---

## Arrow Function Callback

تو JavaScript مدرن معمولاً از Arrow Function برای Callbackها استفاده می‌شه.

```javascript
console.log(calculate(10, 20, (a, b) => a ** b));
```

تو این مثال، Arrow Function به‌عنوان Callback ارسال شده.

---

# Callbacks in Array Methods

Callbackها کاربرد خیلی گسترده‌ای در متدهای Array دارن.

بعضی از مهم‌ترین هاشون:

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `reduce()`
- `sort()`

---

## `forEach()`

تابع Callback برای هر عضو Array اجرا می‌شه.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});
```

---

## `map()`

تابع Callback روی هر عضو اجرا میشه و یه Array جدید ایجاد می‌کنه.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
```

خروجی:

```text
[2, 4, 6, 8, 10]
```

---

## `filter()`

Callback مشخص می‌کنه کدوم عناصر باید تو Array جدید باقی بمونن.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
```

خروجی:

```text
[2, 4]
```

---

## `find()`

Callback مشخص می‌کنه چه مقداری باید پیدا بشه.

```javascript
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((number) => {
  return number > 3;
});

console.log(foundNumber);
```

خروجی:

```text
4
```

---

## `reduce()`

Callback برای تبدیل چند مقدار به یه مقدار نهایی استفاده می‌شه.

```javascript
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);
```

خروجی:

```text
15
```

---

# Synchronous Callback

یه تصور اشتباه اینه که همه‌ی Callbackها Asynchronous هستن.

واقعیتش این درست نیست.

مثال:

```javascript
function first(callback) {
  console.log("First function");

  callback();

  console.log("First function finished");
}

function second() {
  console.log("Callback function");
}

first(second);
```

خروجی:

```text
First function
Callback function
First function finished
```

اینجاCallback همون لحظه و به ترتیب اجرا می‌شه.

به این نوع Callback، **Synchronous Callback** می‌گیم.

---

# Asynchronous Callback

گاهی اوقات Callback فوراً اجرا نمی‌شه و برای زمان دیگه ای نگه داشته می‌شه.

مثال:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async callback executed");
}, 2000);

console.log("End");
```

خروجی:

```text
Start
End
Async callback executed
```

تابعی که به `setTimeout()` داده شده، یه **Asynchronous Callback** عه.

این Callback پس از گذشت زمان مشخص اجرا می‌شه.

---

# Callback with Data

Callbackها می‌تونن داده دریافت کنن.

```javascript
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
```

خروجی:

```text
Elman is a Web Developer
```

اینجا داریم:

```text
getUser()
    ↓
Creates user data
    ↓
Passes data to callback
    ↓
Callback receives the user
```

---

# Reusable Functions with Callbacks

Callbackها باعث می‌شن تابع های انعطاف پذیرتری بنویسیم.

```javascript
function processNumbers(numbers, callback) {
  return numbers.map(callback);
}

const squaredNumbers = processNumbers([1, 2, 3, 4], (number) => number ** 2);

console.log(squaredNumbers);
```

خروجی:

```text
[1, 4, 9, 16]
```

تابع `processNumbers` نمی‌دونه دقیقاً چه عملی باید روی اعداد انجام بشه.

این رفتار توسط Callback مشخص می‌شه.

---

# Higher-Order Functions

تابعی که حداقل یکی از این کارها رو انجام بده، یه **Higher-Order Function** هستش:

1. یه Function رو بعنوان آرگومان دریافت کنه.
2. یه Function رو Return کنه.

مثال:

```javascript
function execute(callback) {
  console.log("Executing callback...");

  callback();
}

execute(() => {
  console.log("Task completed");
});
```

تو این مثال:

- `execute` یه Higher-Order Function عه.
- Arrow Function ارسال شده به اون یه Callback عه.

---

# Event Callbacks

یکی از کاربردهای مهم Callbackها توی Event Handling هستش.

مثلاً توی مرورگر:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

تابع Arrow بعنوان Callback به `addEventListener()` داده می‌شه.

مرورگر اون رو زمان وقوع Event موردنظر اجرا می‌کنه.

> This example runs in a browser environment.

---

# Callback Hell

وقتی چند عملیات Asynchronous بشدت درون همدیگه قرار بگیرن، ممکنه که ساختاری شبیه به این ایجاد بشه:

```javascript
loginUser(user, () => {
  getUserPosts(() => {
    getPostComments(() => {
      sendNotification(() => {
        console.log("Everything completed");
      });
    });
  });
});
```

به این ساختار معمولاً **Callback Hell** گفته می‌شه.
البته این کلی مشکل داره و مشکل اصلی اون:

- کاهش خوانایی
- سخت شدن Debugging
- سخت شدن نگهداری کد
- افزایش پیچیدگی

برای مدیریت کردن بهتر عملیات Asynchronous، درکل این مفاهیم اهمیت زیادی دارن:

```text
Callback Functions
        ↓
Asynchronous JavaScript
        ↓
Event Loop
        ↓
Callback Hell
        ↓
Promises
        ↓
Async / Await
```

---

# Summary

Callback Function تابعی عه که به تابع دیگ ای داده می‌شه تا توسط اون اجرا بشه.

نکات مهم:

- `functionName` یه Function Reference عه.
- `functionName()` یه Function Call عه.
- Callbackها می‌تونن Named یا Anonymous باشن.
- Arrow Functionها به‌طور گسترده برای Callbackها استفاده می‌شن.
- همه‌ی Callbackها Asynchronous نیستن.
- خیلی از Array Methods از Callback استفاده می‌کنن.
- Callbackها به ساختن Functionهای انعطاف‌پذیر کمک می‌کنن.
- Callbackها یکی از پایه‌های مهم Asynchronous JavaScript هستن.

---

## What Is a Callback Function?

In JavaScript, functions are **First-Class Citizens**.

This means that a function can:

- Be stored in a variable.
- Be passed as an argument.
- Be returned from another function.

A **Callback Function** is a function passed to another function so that it can be executed later or when needed.

In simple terms:

> A callback is a function that is passed to another function and executed by that function.

---

## Function Reference vs Function Call

One of the most important concepts when learning callbacks is understanding the difference between a **function reference** and a **function call**.

Consider this function:

```javascript
function introduce(name) {
  console.log(`Hello, ${name}!`);
}
```

And a function that accepts a callback:

```javascript
function processUser(callback) {
  const name = "Elman";

  callback(name);
}
```

### Function Reference

```javascript
processUser(introduce);
```

Here, `introduce` is not executed immediately.

The function itself is passed as an argument.

Later, `processUser` executes it:

```javascript
callback(name);
```

### Function Call

```javascript
processUser(introduce());
```

Here, `introduce()` is executed immediately, and its return value is passed to `processUser`.

Therefore:

```javascript
introduce;
```

means:

> Pass the function.

While:

```javascript
introduce();
```

means:

> Execute the function.

---

## Basic Callback

A simple example:

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

console.log(calculate(10, 20, add));
```

Output:

```text
30
```

Execution flow:

```text
calculate(10, 20, add)
        ↓
operation = add
        ↓
operation(10, 20)
        ↓
add(10, 20)
        ↓
30
```

In this example:

- `calculate` is a Higher-Order Function.
- `operation` receives a function.
- `add` is the Callback Function.

---

## Using Different Callbacks

Callbacks allow us to change the behavior of a function without changing the function itself.

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, subtract));
console.log(calculate(10, 20, multiply));
```

Output:

```text
30
-10
200
```

The `calculate` function remains the same, while the callback determines the operation.

---

## Anonymous Callback

A callback does not always need to be defined separately.

An anonymous function can be passed directly:

```javascript
console.log(
  calculate(10, 20, function (a, b) {
    return a / b;
  }),
);
```

Output:

```text
0.5
```

---

## Arrow Function Callback

Modern JavaScript commonly uses Arrow Functions for callbacks.

```javascript
console.log(calculate(10, 20, (a, b) => a ** b));
```

The Arrow Function is passed directly as a callback.

---

# Callbacks in Array Methods

Callbacks are heavily used in Array methods.

Common examples include:

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `reduce()`
- `sort()`

---

## `forEach()`

The callback runs once for each element.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});
```

---

## `map()`

The callback transforms each element and creates a new Array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
```

Output:

```text
[2, 4, 6, 8, 10]
```

---

## `filter()`

The callback determines which elements should remain in the new Array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```text
[2, 4]
```

---

## `find()`

The callback determines which value should be found.

```javascript
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((number) => {
  return number > 3;
});

console.log(foundNumber);
```

Output:

```text
4
```

---

## `reduce()`

The callback combines multiple values into a single result.

```javascript
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);
```

Output:

```text
15
```

---

# Synchronous Callback

A common misconception is that all callbacks are asynchronous.

This is not true.

Example:

```javascript
function first(callback) {
  console.log("First function");

  callback();

  console.log("First function finished");
}

function second() {
  console.log("Callback function");
}

first(second);
```

Output:

```text
First function
Callback function
First function finished
```

The callback is executed immediately during the normal execution flow.

This is called a **Synchronous Callback**.

---

# Asynchronous Callback

A callback can also be executed later.

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async callback executed");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Async callback executed
```

The function passed to `setTimeout()` is an **Asynchronous Callback**.

---

# Callback with Data

Callbacks can receive data.

```javascript
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
```

Output:

```text
Elman is a Web Developer
```

Execution flow:

```text
getUser()
    ↓
Creates user data
    ↓
Passes data to callback
    ↓
Callback receives the data
```

---

# Reusable Functions with Callbacks

Callbacks help us create flexible and reusable functions.

```javascript
function processNumbers(numbers, callback) {
  return numbers.map(callback);
}

const squaredNumbers = processNumbers([1, 2, 3, 4], (number) => number ** 2);

console.log(squaredNumbers);
```

Output:

```text
[1, 4, 9, 16]
```

The `processNumbers` function does not need to know exactly what operation will be performed.

The callback defines the behavior.

---

# Higher-Order Functions

A function is called a **Higher-Order Function** if it does at least one of the following:

1. Accepts another function as an argument.
2. Returns another function.

Example:

```javascript
function execute(callback) {
  console.log("Executing callback...");

  callback();
}

execute(() => {
  console.log("Task completed");
});
```

In this example:

- `execute` is a Higher-Order Function.
- The Arrow Function is a Callback Function.

---

# Event Callbacks

Callbacks are commonly used for Event Handling.

For example, in a browser:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

The Arrow Function is registered as a callback.

The browser executes it when the `click` event occurs.

> This example runs in a browser environment.

---

# Callback Hell

When multiple asynchronous operations are deeply nested, the code may look like this:

```javascript
loginUser(user, () => {
  getUserPosts(() => {
    getPostComments(() => {
      sendNotification(() => {
        console.log("Everything completed");
      });
    });
  });
});
```

This pattern is commonly known as **Callback Hell**.

It can lead to:

- Poor readability.
- Difficult debugging.
- Difficult maintenance.
- Increased complexity.

This is one of the reasons why modern JavaScript introduced better patterns for asynchronous code.

```text
Callback Functions
        ↓
Asynchronous JavaScript
        ↓
Event Loop
        ↓
Callback Hell
        ↓
Promises
        ↓
Async / Await
```

---

# Summary

A Callback Function is a function passed to another function so that it can be executed by that function.

Key points:

- `functionName` is a function reference.
- `functionName()` executes the function.
- Callbacks can be named or anonymous.
- Arrow Functions are commonly used as callbacks.
- Not all callbacks are asynchronous.
- Many Array methods use callbacks.
- Callbacks help create flexible and reusable functions.
- Callbacks are a fundamental part of asynchronous JavaScript.
