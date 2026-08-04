# JavaScript Type Conversion

> Notes and examples about Type Conversion in JavaScript.

---

## Type Conversion چیه؟

Type Conversion به فرآیند تبدیل یک نوع داده به نوعی دیگر گفته می‌شه.

توی JavaScript این تبدیل می‌تونه:

- Implicit (خودکار)
- Explicit (توسط برنامه‌نویس)

باشه.

---

## عملگر (+)

اگه یکی از عملوندها String باشه، نتیجه هم String خواهد بود.

"2" + 7
// "27"

---

## عملگرهای (- \* /)

این عملگرها تلاش می‌کنن مقدارها رو به Number تبدیل کنن.

"7" - 2
// 5

"7" \* 2
// 14

"7" / 2
// 3.5

---

## Stringهای غیرعددی

اگر String قابل تبدیل به Number نباشه:

"Elman" \* 2
// NaN

---

## Boolean Conversion

در عملیات‌های عددی:

| Value | Number |
| ----- | ------ |
| true  | 1      |
| false | 0      |

---

## null Conversion

در عملیات‌های ریاضی null تبدیل به 0 میشه

null → 0

اما در عملگر (+):

"2" + null
// "2null"

---

## Important Notes

- (+) may concatenate strings.
- (-), (\*), (/) convert operands to numbers.
- Invalid numeric conversions produce NaN.
- null converts to 0 in numeric operations.
- undefined converts to NaN in numeric operations.

---

## What is Type Conversion?

Type Conversion is the process of converting a value from one data type to another.

JavaScript supports:

- Implicit Conversion
- Explicit Conversion

---

## The (+) Operator

If either operand is a string, the result becomes a string.

Ex:
"2" + 7
// "27"

---

## Arithmetic Operators

Operators such as:

- -
- -
- /

convert operands to numbers whenever possible.

"7" - 2
// 5

"7" \* 2
// 14

"7" / 2
// 3.5

---

## Non-numeric Strings

If a string cannot be converted into a number:

Ex:
"Elman" \* 2
// NaN

---

## Boolean Conversion

| Value | Number |
| ----- | ------ |
| true  | 1      |
| false | 0      |

---

## null Conversion

In numeric operations:

null converts to 0

With the (+) operator:

"2" + null
// "2null"

---

## Summary

- - may concatenate strings.
- Arithmetic operators convert values to numbers.
- Invalid conversions return NaN.
- null becomes 0 in numeric operations.
- undefined becomes NaN in numeric operations.
