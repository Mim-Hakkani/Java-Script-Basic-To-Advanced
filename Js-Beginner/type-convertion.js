/*
জাভাস্ক্রিপ্টে Type Conversion বলতে এক ধরনের ডেটাকে অন্য ধরনের ডেটায় পরিবর্তন করাকে বোঝায়। এটি ম্যানুয়ালি (Explicit) বা স্বয়ংক্রিয়ভাবে (Implicit) হতে পারে।

Type Conversion এর ধরনসমূহ
String Conversion
Number Conversion
Boolean Conversion
১. String Conversion
ডেটাকে স্ট্রিংয়ে পরিবর্তন করার জন্য ব্যবহার করা হয়।

কোড উদাহরণ:
javascript
Copy code
let value = 123;
let strValue = String(value);
console.log(strValue); // "123" (string)
console.log(typeof strValue); // string
যা কনভার্ট হয়:
Numbers → স্ট্রিং (e.g., 123 → "123")
Booleans → স্ট্রিং (e.g., true → "true", false → "false")
Null → "null"
Undefined → "undefined"
২. Number Conversion
ডেটাকে সংখ্যায় পরিবর্তন করার জন্য ব্যবহার করা হয়।

কোড উদাহরণ:
javascript
Copy code
let str = "123";
let num = Number(str);
console.log(num); // 123 (number)
console.log(typeof num); // number
যা কনভার্ট হয়:
Strings → সংখ্যায় (e.g., "123" → 123, "123abc" → NaN)
Booleans → সংখ্যা (e.g., true → 1, false → 0)
Null → 0
Undefined → NaN
আরও উদাহরণ:
javascript
Copy code
console.log(Number("123"));    // 123
console.log(Number("123abc")); // NaN
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Number(null));     // 0
console.log(Number(undefined));// NaN
৩. Boolean Conversion
ডেটাকে বুলিয়ানে (true/false) পরিবর্তন করার জন্য ব্যবহার করা হয়।

কোড উদাহরণ:
javascript
Copy code
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean("Hello"));// true
console.log(Boolean(""));     // false
যা কনভার্ট হয়:
Truthy Values → true (যেমন, non-empty strings, non-zero numbers)
Falsy Values → false (যেমন, 0, "", null, undefined, NaN)
Implicit Type Conversion (Type Coercion)
জাভাস্ক্রিপ্টে কিছু অপারেশন স্বয়ংক্রিয়ভাবে টাইপ কনভার্ট করে।

কোড উদাহরণ:
javascript
Copy code
console.log("5" + 2); // "52" (String Concatenation)
console.log("5" - 2); // 3   (Number Conversion)
console.log("5" * "2"); // 10 (Number Conversion)
console.log(1 + true); // 2   (true → 1)
console.log(1 + null); // 1   (null → 0)
Type Conversion এর প্র্যাকটিস
String থেকে Number:

javascript
Copy code
let result = "25" - "5"; 
console.log(result); // Output: 20
Boolean থেকে Number:

javascript
Copy code
console.log(true + false); // Output: 1
String Concatenation:

javascript
Copy code
console.log("Hello" + 5); // Output: "Hello5"
*/