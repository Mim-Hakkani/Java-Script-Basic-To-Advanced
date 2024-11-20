/*
Exercise 1: Hello Message
একটি প্রোগ্রাম লিখুন যা:
ইউজারের নাম ইনপুট নেয়।
তারপরে একটি এলার্ট দেখায়: "স্বাগতম, [ইউজারের নাম]!"

Solution 1 : 

 

Exercise 2: Calculator
একটি প্রোগ্রাম তৈরি করুন যা:

ইউজারের কাছে দুটি সংখ্যা ইনপুট নেয়।
দুটি সংখ্যার যোগফল দেখায়।
Hint: prompt ব্যবহার করুন।

Exercise 3: Even or Odd
একটি প্রোগ্রাম লিখুন যা:

ইউজারের কাছ থেকে একটি সংখ্যা ইনপুট নেয়।
চেক করে যে সংখ্যা জোড় (Even) নাকি বিজোড় (Odd)।
Output:
যদি সংখ্যা জোড় হয়, দেখাবে "এই সংখ্যা জোড়"।
যদি বিজোড় হয়, দেখাবে "এই সংখ্যা বিজোড়"।

Exercise 4: Confirm Age
একটি প্রোগ্রাম তৈরি করুন যা:

ইউজারের বয়স ইনপুট নেয়।
চেক করে যে ইউজার প্রাপ্তবয়স্ক কিনা (১৮ বছরের বেশি)।
Output:
যদি প্রাপ্তবয়স্ক হয়, দেখাবে: "আপনি সাইটে প্রবেশ করতে পারবেন"।
নাহলে দেখাবে: "আপনার বয়স যথেষ্ট নয়।"


Exercise 5: Multiplication Table
একটি প্রোগ্রাম লিখুন যা:

ইউজারের কাছ থেকে একটি সংখ্যা ইনপুট নেয়।
সেই সংখ্যার গুণনীয়ক টেবিল (Multiplication Table) প্রিন্ট করে।
উদাহরণ ইনপুট: 5
Output:
python
Copy code
5 x 1 = 5  
5 x 2 = 10  
5 x 3 = 15  
...  
5 x 10 = 50
Exercise 6: Smallest of Three Numbers
একটি প্রোগ্রাম লিখুন যা:

তিনটি সংখ্যা ইনপুট নেয়।
তিনটির মধ্যে কোনটি সবচেয়ে ছোট, তা চেক করে।
Output:
যদি ৩, ৭, এবং ৫ ইনপুট হয়, দেখাবে: "সবচেয়ে ছোট সংখ্যা ৩।"
Exercise 7: String Length
একটি প্রোগ্রাম লিখুন যা:

ইউজারের কাছ থেকে একটি টেক্সট ইনপুট নেয়।
সেই টেক্সটটির দৈর্ঘ্য (length) দেখায়।
Hint: string.length ব্যবহার করুন।
Exercise 8: Password Checker
একটি প্রোগ্রাম তৈরি করুন যা:

একটি নির্দিষ্ট পাসওয়ার্ড সেট করবে (যেমন: password123)।
ইউজারের কাছ থেকে পাসওয়ার্ড ইনপুট নেবে।
চেক করবে ইনপুট পাসওয়ার্ডটি সঠিক কিনা।
Output:
সঠিক হলে: "পাসওয়ার্ড সঠিক!"
ভুল হলে: "পাসওয়ার্ড ভুল, আবার চেষ্টা করুন।"
Exercise 9: Fahrenheit to Celsius
একটি প্রোগ্রাম লিখুন যা:

ইউজারের কাছ থেকে ফারেনহাইট (°F) ইনপুট নেয়।
সেটিকে সেলসিয়াসে (°C) কনভার্ট করে দেখায়।
Formula:
makefile
Copy code
Celsius = (Fahrenheit - 32) * 5 / 9
Exercise 10: Guess the Number
একটি প্রোগ্রাম তৈরি করুন যা:

একটি র‍্যান্ডম সংখ্যা (১ থেকে ১০-এর মধ্যে) তৈরি করবে।
ইউজারের কাছ থেকে সেই সংখ্যা অনুমান করতে বলবে।
চেক করবে ইউজার সঠিক অনুমান করেছে কিনা।
Output:
সঠিক হলে: "আপনার অনুমান সঠিক!"
ভুল হলে: "ভুল অনুমান, সঠিক উত্তর ছিল [সংখ্যা]"।
*/

// sol 1 : 
// let Name = prompt("Your Name","fd");
// alert(`Your Name is ${Name}`)


// 2.
// let Num1 = prompt("First Number");
// let Num2 = prompt("Second Number");
// Num1 = Number(Num1);
// Num2 = Number(Num2);
// alert(Num1+Num2)


// let Num1 = prompt("Number");
// Num1 = Number(Num1);
// if(Num1%2===0){
//     alert("Even")
// }
// else{
//     alert("Odd")
// }



let isAdult = confirm("আপনি কি ১৮ বছরের বেশি?");
if (isAdult) {
  alert("স্বাগতম, আপনি প্রবেশ করতে পারেন!");
} else {
  alert("দুঃখিত, আপনি প্রবেশ করতে পারবেন না।");
}
