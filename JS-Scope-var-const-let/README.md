# Scope, var, let & const

### اسکوپ چیه؟

همیشه Scope توی JavaScript مشخص می‌کنه که یه متغیر توی کدوم قسمت از برنامه قابل دسترسی عه.

به طور کلی با چند نوع Scope مهم روبه‌رو هستیم:

- Global Scope
- Function Scope
- Block Scope

---

## Global Scope

متغیری که خارج از Function یا Block تعریف بشه، توی Global Scope قرار می‌گیره.

```js
const name = "Elman";

console.log(name);
```

---

## Function Scope

متغیرهای `var` دارای Function Scope هستن.

یعنی متغیری که با `var` داخل یه Function تعریف بشه، داخل همون Function قابل دسترسی عه.

```js
function test() {
  var message = "Hello";
  console.log(message);
}
test();

// console.log(message); // ReferenceError
```

---

## Block Scope

`let` و `const` دارای Block Scope هستن.

Block معمولاً با `{}` مشخص می‌شه.

```js
if (true) {
  let name = "Elman";
  const age = 19;

  console.log(name);
  console.log(age);
}

// name و age خارج از block قابل دسترسی نیستن.
```

---

# var

متغیر `var` روش قدیمی‌تر تعریف متغیر توی JavaScript عه.

```js
var name = "Elman";
```

### ویژگی‌های `var`

- Function Scoped عه.
- Block Scoped نیست.
- قابل reassignment عه.
- امکان redeclaration داره.
- Hoisting داره.
- توی JavaScript مدرن معمولاً استفاده نمی‌شه.

مثال:

```js
if (true) {
  var message = "Hello";
}

console.log(message);
```

توی این مثال، `message` با وجود تعریف شدن داخل `if`، خارج از block هم قابل دسترسی عه.

---

# let

`let` برای متغیرهایی استفاده می‌شه که مقدارشون ممکن عه تغییر کنه.

```js
let score = 10;

score = 20;

console.log(score);
```

### ویژگی‌های `let`

- Block Scoped عه.
- قابل reassignment عه.
- توی یه Scope نمی‌تونیم اون رو دوباره declare کنیم.
- قبل از initialization توی Temporal Dead Zone قرار داره.

مثال:

```js
let count = 0;

count++;
count++;

console.log(count);
```

---

# const

`const` برای متغیرهایی استفاده می‌شه که قرار نیست دوباره reassigned بشن.

```js
const name = "Elman";
```

این کار مجاز نیست:

```js
const name = "Elman";

// name = "Matt"; // TypeError
```

### ویژگی‌های `const`

- Block Scoped عه.
- قابل reassignment نیست.
- توی یه Scope نمی‌تونیم اون رو دوباره declare کنیم.
- موقع declaration باید مقدار اولیه داشته باشه.
- قبل از initialization توی Temporal Dead Zone قرار داره.

---

# Reassignment

درواقع Reassignment یعنی مقدار جدیدی به یه متغیر موجود اختصاص بدیم.

```js
let score = 10;

score = 20;
```

`var` و `let` قابل reassignment هستن:

```js
var x = 10;
x = 20;

let y = 10;
y = 20;
```

ولی `const` قابل reassignment نیست:

```js
const z = 10;

// z = 20; // TypeError
```

---

# Redeclaration

درواقع Redeclaration یعنی یه متغیر رو دوباره با همون declaration keyword تعریف کنیم.

`var` اجازه Redeclaration می‌ده:

```js
var name = "Elman";
var name = "Matt";

console.log(name);
```

ولی `let` و `const` توی یه Scope اجازه Redeclaration ندارن:

```js
let name = "Elman";

// let name = "Matt"; // SyntaxError
```

---

# Hoisting

توی JavaScript، declaration بعضی متغیرها قبل از اجرای کد توی محیط مربوط به Scope ثبت می‌شه.

رفتار `var` رو می‌تونیم اینطوری ببینیم:

```js
console.log(name);

var name = "Elman";
```

خروجی:

```text
undefined
```

ولی `let` و `const` قبل از initialization قابل دسترسی نیستن.

```js
// console.log(name); // ReferenceError

let name = "Elman";
```

این بازه را **Temporal Dead Zone (TDZ)** می‌نامیم.

---

# const و Object

`const` به این معنی نیست که Object کاملاً immutable عه.

```js
const user = {
  name: "Elman",
  role: "Developer",
};

user.role = "Web Security Engineer";

console.log(user);
```

این کار مجاز عه.

اما نمی‌تونیم binding رو به Object دیگه ای تغییر بدیم:

```js
// user = {}; // TypeError
```

بنابراین:

```text
const : جلوگیری از reassignment
const ≠ immutable object
```

---

# var در مقابل let در Loop

یکی از تفاوت‌های مهم `var` و `let` رو می‌شه توی Loop مشاهده کرد.

با `var`:

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

`i` بعد از Loop همچنان قابل دسترسی عه.

ولی `let` دارای ویژگی Block Scope عه:

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError
```

---

# var و let در Closure

تفاوت Scope توی Closure هم اهمیت زیادی پیدا می‌کنه.

با `var`:

```js
const functions = [];

for (var i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
```

خروجی:

```text
3
3
3
```

ولی با `let`:

```js
const functions = [];

for (let i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
```

خروجی:

```text
0
1
2
```

این تفاوت به نحوه ایجاد Binding برای متغیر Loop و Block Scope مربوط عه.

---

# مقایسه

| ویژگی                        | var         | let         | const     |
| ---------------------------- | ----------- | ----------- | --------- |
| Scope                        | Function    | Block       | Block     |
| Reassignment                 | Yes         | Yes         | No        |
| Redeclaration                | Yes         | No          | No        |
| Hoisting                     | Yes         | Yes + TDZ   | Yes + TDZ |
| مقدار اولیه موقع declaration | الزامی نیست | الزامی نیست | الزامی عه |

---

# از کدوم استفاده کنیم؟

توی JavaScript مدرن می‌تونیم از این قانون ساده استفاده کنیم:

```text
const : انتخاب پیش‌فرض
let : وقتی نیاز به reassignment داریم
var : معمولاً استفاده نمی‌شه
```

مثال:

```js
const appName = "Voxa";

let requestCount = 0;

requestCount++;
```

`appName` تغییر نمی‌کنه، بنابراین `const` مناسب عه.

`requestCount` تغییر می‌کنه، بنابراین `let` مناسب هخ.

---

# مزایا و معایب

## var

### مزایا

- سازگاری با کدهای قدیمی
- Function Scope
- امکان redeclaration

### معایب

- Block Scoped نیست.
- Redeclaration می‌تونه باعث خطاهای ناخواسته بشه.
- رفتار Hoisting ممکن عه گیج‌کننده باشه.
- توی JavaScript مدرن معمولاً انتخاب مناسبی نیست.

---

## let

### مزایا

- Block Scoped عه.
- برای متغیرهای قابل تغییر مناسب عه.
- از Redeclaration توی یه Scope جلوگیری می‌کنه.
- رفتار قابل پیش‌بینی‌تری نسبت به `var` داره.

### معایب

- اگه متغیر نباید تغییر کنه، `const` انتخاب واضح‌تری عه.
- رفتار TDZ ممکن عه همون اول گیج‌کننده باشه.

---

## const

### مزایا

- Block Scoped عه.
- از reassignment جلوگیری می‌کنه.
- Intent کد رو واضح‌تر می‌کنه.
- انتخاب پیش‌فرض مناسبی برای بیشتر متغیرهاست.

### معایب

- برای مقادیری که باید reassigned بشن مناسب نیست.
- `const` به تنهایی Object و Array رو immutable نمی‌کنه.

---

# خلاصه

```text
var
→ Function Scope
→ Reassign: Yes
→ Redeclare: Yes

let
→ Block Scope
→ Reassign: Yes
→ Redeclare: No

const
→ Block Scope
→ Reassign: No
→ Redeclare: No
```

### قانون مهم

> Use `const` by default, use `let` when reassignment is necessary, and avoid `var` in modern JavaScript unless you specifically need its legacy behavior.

---

### What is Scope?

Scope in JavaScript determines where a variable can be accessed within a program.

In general, we work with several important types of Scope:

- Global Scope
- Function Scope
- Block Scope

---

## Global Scope

A variable declared outside a Function or Block is in the Global Scope.

```js
const name = "Elman";

console.log(name);
```

---

## Function Scope

Variables declared with `var` are Function Scoped.

This means that a variable declared with `var` inside a Function can be accessed within that Function.

```js
function test() {
  var message = "Hello";

  console.log(message);
}

test();

// console.log(message); // ReferenceError
```

---

## Block Scope

`let` and `const` are Block Scoped.

A Block is usually defined by `{}`.

```js
if (true) {
  let name = "Elman";
  const age = 19;

  console.log(name);
  console.log(age);
}

// name and age cannot be accessed outside the block.
```

---

# var

`var` is the older way of declaring variables in JavaScript.

```js
var name = "Elman";
```

### Features of `var`

- Function Scoped
- Not Block Scoped
- Can be reassigned
- Can be redeclared
- Hoisted
- Usually not used in modern JavaScript

Example:

```js
if (true) {
  var message = "Hello";
}

console.log(message);
```

In this example, `message` can still be accessed outside the `if` block even though it was declared inside it.

---

# let

`let` is used for variables whose values may change.

```js
let score = 10;

score = 20;

console.log(score);
```

### Features of `let`

- Block Scoped
- Can be reassigned
- Cannot be redeclared in the same Scope
- Is in the Temporal Dead Zone before initialization

Example:

```js
let count = 0;

count++;
count++;

console.log(count);
```

---

# const

`const` is used for variables that should not be reassigned.

```js
const name = "Elman";
```

This is not allowed:

```js
const name = "Elman";

// name = "Matt"; // TypeError
```

### Features of `const`

- Block Scoped
- Cannot be reassigned
- Cannot be redeclared in the same Scope
- Must be initialized when declared
- Is in the Temporal Dead Zone before initialization

---

# Reassignment

Reassignment means assigning a new value to an existing variable.

```js
let score = 10;

score = 20;
```

Both `var` and `let` can be reassigned:

```js
var x = 10;
x = 20;

let y = 10;
y = 20;
```

However, `const` cannot be reassigned:

```js
const z = 10;

// z = 20; // TypeError
```

---

# Redeclaration

Redeclaration means declaring a variable again using the same declaration keyword.

`var` allows redeclaration:

```js
var name = "Elman";
var name = "Matt";

console.log(name);
```

However, `let` and `const` do not allow redeclaration in the same Scope:

```js
let name = "Elman";

// let name = "Matt"; // SyntaxError
```

---

# Hoisting

In JavaScript, declarations are processed as part of setting up their corresponding Scope before the code is executed.

The behavior of `var` can be observed here:

```js
console.log(name);

var name = "Elman";
```

Output:

```text
undefined
```

However, `let` and `const` cannot be accessed before initialization.

```js
// console.log(name); // ReferenceError

let name = "Elman";
```

This period is called the **Temporal Dead Zone (TDZ)**.

---

# const and Objects

`const` does not mean that an Object is completely immutable.

```js
const user = {
  name: "Elman",
  role: "Developer",
};

user.role = "Web Security Engineer";

console.log(user);
```

This is allowed.

However, we cannot reassign the binding to another Object:

```js
// user = {}; // TypeError
```

Therefore:

```text
const → prevents reassignment
const ≠ immutable object
```

---

# var vs let in a Loop

One of the important differences between `var` and `let` can be seen in a Loop.

With `var`:

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

`i` is still accessible after the Loop.

However, `let` is Block Scoped:

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError
```

---

# var vs let in a Closure

The difference in Scope also becomes important when working with Closures.

With `var`:

```js
const functions = [];

for (var i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
```

Output:

```text
3
3
3
```

With `let`:

```js
const functions = [];

for (let i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
```

Output:

```text
0
1
2
```

This difference is related to how the Loop variable's Binding is created and how Block Scope works.

---

# Comparison

| Feature                                | var      | let       | const     |
| -------------------------------------- | -------- | --------- | --------- |
| Scope                                  | Function | Block     | Block     |
| Reassignment                           | Yes      | Yes       | No        |
| Redeclaration                          | Yes      | No        | No        |
| Hoisting                               | Yes      | Yes + TDZ | Yes + TDZ |
| Initialization required at declaration | No       | No        | Yes       |

---

# Which One Should We Use?

In modern JavaScript, we can follow this simple rule:

```text
const → default choice
let → when reassignment is needed
var → usually avoid
```

Example:

```js
const appName = "Voxa";

let requestCount = 0;

requestCount++;
```

`appName` does not change, so `const` is appropriate.

`requestCount` changes, so `let` is appropriate.

---

# Advantages and Disadvantages

## var

### Advantages

- Compatibility with legacy code
- Function Scope
- Allows redeclaration

### Disadvantages

- Not Block Scoped
- Redeclaration can cause unintended behavior
- Hoisting behavior can be confusing
- Usually not a good choice in modern JavaScript

---

## let

### Advantages

- Block Scoped
- Suitable for variables whose values need to change
- Prevents redeclaration in the same Scope
- More predictable behavior than `var`

### Disadvantages

- If a variable should not change, `const` communicates the intent more clearly
- TDZ behavior can be confusing at first

---

## const

### Advantages

- Block Scoped
- Prevents reassignment
- Makes the intent of the code clearer
- A good default choice for most variables

### Disadvantages

- Not suitable for values that need to be reassigned
- `const` alone does not make Objects or Arrays immutable

---

# Summary

```text
var
→ Function Scope
→ Reassign: Yes
→ Redeclare: Yes

let
→ Block Scope
→ Reassign: Yes
→ Redeclare: No

const
→ Block Scope
→ Reassign: No
→ Redeclare: No
```

### Important Rule

> Use `const` by default, use `let` when reassignment is necessary, and avoid `var` in modern JavaScript unless you specifically need its legacy behavior.
