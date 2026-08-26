# JavaScript Variable Arguments

> Notes and examples about handling a variable number of arguments in JavaScript.

---

گاهی هنگام نوشتن یه تابع، نمی‌دونیم دقیقاً چند آرگومان به اون ارسال میشه.

مثال:

```javascript
sum(10, 20);

sum(10, 20, 30);

sum(10, 20, 30, 40, 50);
```

تو JavaScript روش های مختلفی برای مدیریت تعداد متغیر آرگومان‌ها وجود داره

---

## 1. Fixed Parameters

توی حالت معمول، یه تابع تعداد مشخصی پارامتر داره.

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
```

اگه آرگومان های بیشتری ارسال کنیم، تابع فقط از پارامتر های تعریف شده استفاده می‌کنه

```javascript
console.log(sum(10, 20, 30));
```

خروجی:

```text
30
```

چراکه تابع فقط از `a` و `b` استفاده می‌کنه.

---

## 2. Missing Arguments

اگر برای یک پارامتر مقدار ارسال نشه، مقدار اون `undefined` میشه.

```javascript
function introduce(name, age) {
  console.log(name);
  console.log(age);
}

introduce("Elman");
```

خروجی:

```text
Elman
undefined
```

---

## 3. The `arguments` Object

در Functionهای معمولی، JavaScript یه Object به نام `arguments` فراهم می‌کنه که شامل تمام آرگومان های ارسال شده به تابع هستش.

```javascript
function sumWithArguments() {
  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return total;
}

console.log(sumWithArguments(10, 20, 30, 40));
```

خروجی:

```text
100
```

### نکات مهم

- `arguments` فقط تو Functionهای معمولی وجود داره.
- `arguments` یه Array واقعی نیست.
- `arguments` یه Array-like Object عه.
- Arrow Functionها `arguments` مخصوص خودشون نداره.

مثال:

```javascript
function checkArguments() {
  console.log(Array.isArray(arguments));
}

checkArguments(1, 2, 3);
```

خروجی:

```text
false
```

---

## 4. Rest Parameters

روش مدرن برای دریافت تعداد متغیر آرگومان‌ها استفاده از Rest Parameters هستش.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20, 30, 40));
```

خروجی:

```text
100
```

اینجا:

```javascript
...numbers
```

تمام آرگومان های باقی مانده رو جمع میکنه و داخل یه Array واقعی قرار می‌ده.

.پس می‌تونیم از متد های Array استفاده کنیم:

- `map()`
- `filter()`
- `reduce()`
- `forEach()`

---

## 5. Combining Regular and Rest Parameters

می‌شه پارامترهای معمولی و Rest Parameter رو با هم ترکیب کرد.

```javascript
function introduce(name, ...skills) {
  console.log(name);
  console.log(skills);
}

introduce("Elman", "JavaScript", "React", "Web Security");
```

خروجی:

```text
Elman

[
  "JavaScript",
  "React",
  "Web Security"
]
```

### قانون مهم

Rest Parameter باید همیشه آخرین پارامتر تابع باشه.

❌ نادرست:

```javascript
function test(...values, lastValue) {}
```

✅ درست:

```javascript
function test(firstValue, ...values) {}
```

---

## 6. Using an Array as Input

یکی دیگه از روش ها اینه که چند مقدار رو داخل یه Array قرار بدیم و اون رو به تابع ارسال کنیم.

```javascript
function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumArray([10, 20, 30, 40]));
```

خروجی:

```text
100
```

تو این روش، تابع یه Array دریافت می‌کنه و تعداد مقادیر داخل Array می‌تونه متغیر باشه.

---

## 7. Spread Syntax

Spread Syntax هم از `...` استفاده می‌کنه، ولی کاربرد اون با Rest Parameter متفاوت عه.

```javascript
const numbers = [10, 20, 30, 40];

function sum(a, b, c, d) {
  return a + b + c + d;
}

console.log(sum(...numbers));
```

تو این بخش Spread مقادیر داخل Array رو باز می‌کنه و اون ها رو به عنوان آرگومان های جداگانه به تابع ارسال می‌کنه.

---

## Rest vs Spread

| Rest Parameter                  | Spread Syntax                        |
| ------------------------------- | ------------------------------------ |
| آرگومان‌ ها رو جمع می‌کنه       | مقادیر رو باز می‌کنه                 |
| در تعریف Function استفاده می‌شه | هنگام فراخوانی Function استفاده میشه |
| یه Array ایجاد می‌کنه           | مقادیر یه Iterable رو گسترش می‌ده    |

مثال:

```javascript
function example(...values) {
  console.log(values);
}

const values = [1, 2, 3];

example(...values);
```

توی تعریف تابع:

```javascript
function example(...values)
```

از Rest Parameter استفاده شده.

هنگام فراخوانی تابع:

```javascript
example(...values);
```

از Spread Syntax استفاده شده.

---

## کاربرد های عملی

### محاسبه مجموع چند قیمت

```javascript
function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(100, 250, 500));
```

خروجی:

```text
850
```

### ترکیب پارامتر ثابت و تعداد متغیر ورودی

```javascript
function calculateTotal(discount, ...prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);

  return total - discount;
}

console.log(calculateTotal(100, 500, 800, 1200));
```

خروجی:

```text
2400
```

---

## Arrow Functions

Arrow Functionها `arguments` مخصوص خودشان ندارن

پس برای دریافت تعداد متغیر آرگومان ها در Arrow Functionها معمولاً از Rest Parameters استفاده می‌کنیم.

```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(10, 20, 30));
```

---

## جمع‌بندی

برای مدیریت تعداد متغیر ورودی ها تو JavaScript می‌تونیم از روش های مختلفی استفاده کنیم:

- Fixed Parameters
- The `arguments` Object
- Rest Parameters
- Arrays as Input

تو JavaScript مدرن، `Rest Parameters` معمولاً انتخاب مناسب تری هستن، چون:

- یه Array واقعی ایجاد می‌کنن.
- استفاده از متد های Array را آسون تر می‌کنن.
- با Arrow Functionها سازگار هستن.
- خواناتر و مدرن تر هستن.

---

Sometimes, when writing a function, we do not know exactly how many arguments it will receive.

For example:

```javascript
sum(10, 20);

sum(10, 20, 30);

sum(10, 20, 30, 40, 50);
```

JavaScript provides several ways to handle a variable number of arguments.

---

## 1. Fixed Parameters

A regular function usually has a fixed number of parameters.

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
```

If extra arguments are passed, the function still receives them, but it only uses the parameters defined in the function signature.

```javascript
console.log(sum(10, 20, 30));
```

Output:

```text
30
```

The function only uses `a` and `b`.

---

## 2. Missing Arguments

If a parameter does not receive a value, its value will be `undefined`.

```javascript
function introduce(name, age) {
  console.log(name);
  console.log(age);
}

introduce("Elman");
```

Output:

```text
Elman
undefined
```

---

## 3. The `arguments` Object

Regular functions have access to an object called `arguments`.

It contains all arguments passed to the function.

```javascript
function sumWithArguments() {
  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return total;
}

console.log(sumWithArguments(10, 20, 30, 40));
```

Output:

```text
100
```

### Important Notes

- `arguments` exists in regular functions.
- `arguments` is not a real Array.
- It is an array-like object.
- Arrow functions do not have their own `arguments` object.

Example:

```javascript
function checkArguments() {
  console.log(Array.isArray(arguments));
}

checkArguments(1, 2, 3);
```

Output:

```text
false
```

---

## 4. Rest Parameters

The modern way to accept a variable number of arguments is using Rest Parameters.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20, 30, 40));
```

Output:

```text
100
```

Here:

```javascript
...numbers
```

collects the remaining arguments into a real Array.

Because of that, we can directly use Array methods such as:

- `map()`
- `filter()`
- `reduce()`
- `forEach()`

---

## 5. Combining Regular and Rest Parameters

Regular parameters can be combined with a Rest Parameter.

```javascript
function introduce(name, ...skills) {
  console.log(name);
  console.log(skills);
}

introduce("Elman", "JavaScript", "React", "Web Security");
```

### Important Rule

A Rest Parameter must always be the last parameter.

❌ Invalid:

```javascript
function test(...values, lastValue) {}
```

✅ Valid:

```javascript
function test(firstValue, ...values) {}
```

---

## 6. Using an Array as Input

Another approach is passing an Array containing multiple values to a function.

```javascript
function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumArray([10, 20, 30, 40]));
```

Output:

```text
100
```

The Array can contain any number of values.

---

## 7. Spread Syntax

Spread Syntax also uses `...`, but its purpose is different from a Rest Parameter.

```javascript
const numbers = [10, 20, 30, 40];

function sum(a, b, c, d) {
  return a + b + c + d;
}

console.log(sum(...numbers));
```

Spread expands the values of an iterable and passes them as separate arguments.

---

## Rest vs Spread

| Rest Parameter               | Spread Syntax                   |
| ---------------------------- | ------------------------------- |
| Collects arguments           | Expands values                  |
| Used in function definitions | Used when calling a function    |
| Creates an Array             | Expands values from an iterable |

Example:

```javascript
function example(...values) {
  console.log(values);
}

const values = [1, 2, 3];

example(...values);
```

Inside the function definition:

```javascript
function example(...values)
```

`...values` is a Rest Parameter.

When calling the function:

```javascript
example(...values);
```

`...values` is Spread Syntax.

---

## Practical Examples

### Calculating a Total

```javascript
function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(100, 250, 500));
```

Output:

```text
850
```

### Combining Fixed and Variable Arguments

```javascript
function calculateTotal(discount, ...prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);

  return total - discount;
}

console.log(calculateTotal(100, 500, 800, 1200));
```

Output:

```text
2400
```

---

## Arrow Functions

Arrow functions do not have their own `arguments` object.

For this reason, Rest Parameters are commonly used to accept a variable number of arguments in Arrow Functions.

```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(10, 20, 30));
```

---

## Summary

JavaScript provides several ways to handle a variable number of inputs:

- Fixed Parameters
- The `arguments` Object
- Rest Parameters
- Arrays as Input

In modern JavaScript, Rest Parameters are usually the preferred approach because they:

- Create a real Array.
- Work naturally with Array methods.
- Work with Arrow Functions.
- Provide cleaner and more readable code.
