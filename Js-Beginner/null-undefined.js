// জাভাস্ক্রিপ্টে || (OR) এবং ?? (Nullish Coalescing Operator) দেখতে একইরকম মনে হতে পারে, তবে তাদের কাজের মধ্যে গুরুত্বপূর্ণ পার্থক্য রয়েছে। নিচে এই দুইটির পার্থক্য ব্যাখ্যা করা হলো।

// ১. || (Logical OR)
// || অপারেটর এমন ভ্যালু রিটার্ন করে যেটি প্রথম Truthy ভ্যালু।

// Truthy & Falsy ভ্যালু:
// Falsy Values: false, 0, "" (empty string), null, undefined, NaN
// Truthy Values: এগুলোর বাইরে যা কিছু।
// কোড উদাহরণ:
// javascript
// Copy code
// let value = "" || "Default Value";
// console.log(value); // Output: "Default Value"
// কাজের ধরণ:
// প্রথম Truthy ভ্যালু রিটার্ন করে।
// যদি সব ভ্যালু Falsy হয়, তাহলে শেষ ভ্যালু রিটার্ন করে।
// ২. ?? (Nullish Coalescing Operator)
// ?? অপারেটর তখনই কাজ করে যখন ভ্যালু null বা undefined হয়।

// কোড উদাহরণ:
// javascript
// Copy code
// let value = "" ?? "Default Value";
// console.log(value); // Output: ""
// কাজের ধরণ:
// প্রথম null বা undefined নয় এমন ভ্যালু রিটার্ন করে।
// এটি শুধুমাত্র null এবং undefined চেক করে, অন্য কোনো Falsy ভ্যালুকে ইগনোর করে।
// মূল পার্থক্য
// | পয়েন্ট | || (OR) | ?? (Nullish Coalescing) | |---------------------------|---------------------------------------|---------------------------------------| | Falsy Values চেক করে | সব Falsy Values চেক করে। | শুধু null ও undefined চেক করে।| | যখন খালি স্ট্রিং দেয় | খালি স্ট্রিংকে Falsy মনে করে। | খালি স্ট্রিংকে গ্রহণ করে। | | কোড উদাহরণ | " " হলে Default Value দেখায়। | " " থাকলে মূল স্ট্রিংই দেখায়। |

// একসঙ্গে উদাহরণ:
// javascript
// Copy code
// let value1 = "" || "Default Value";
// let value2 = "" ?? "Default Value";

// console.log(value1); // Output: "Default Value" (Falsy হওয়ায় OR অপারেটর ডিফল্ট রিটার্ন করে)
// console.log(value2); // Output: "" (Nullish Coalescing অপারেটর এটি গ্রহণ করে)
// প্র্যাকটিস উদাহরণ:
// Falsy চেক:

// javascript
// Copy code
// let a = 0 || "Fallback"; 
// let b = 0 ?? "Fallback";
// console.log(a); // Output: "Fallback" 
// console.log(b); // Output: 0
// Null/Undefined চেক:

// javascript
// Copy code
// let user = null ?? "Guest User";
// console.log(user); // Output: "Guest User"
// Falsy এবং Nullish মিশ্রণ:

// javascript
// Copy code
// let x = undefined || null ?? "Default";
// console.log(x); // Output: "Default"
// প্রতিদিন ব্যবহার করার টিপস:
// || ব্যবহার করুন: যখন সব ধরনের Falsy চেক করতে চান।
// ?? ব্যবহার করুন: যখন শুধু null এবং undefined চেক করতে চান।
// কোনো প্রশ্ন থাকলে জানাবেন! 😊