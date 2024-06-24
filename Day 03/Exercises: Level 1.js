// Declare variables and assign values
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = true;
let year = 2024;

// Check data types using typeof operator
console.log(typeof firstName); // String
console.log(typeof lastName);  // String
console.log(typeof country);   // String
console.log(typeof city);      // String
console.log(typeof age);        // Number
console.log(typeof isMarried); // Boolean
console.log(typeof year);       // Number

// Type check
console.log(typeof '10' === typeof 10); // false (string vs number)
console.log(parseInt('9.8') === 10);   // false (parses to 9)

// Truthy values
console.log("Hello" && true);         // true (both truthy)
console.log([1, 2, 3]);               // true (non-empty array)
console.log({ name: "Alice" });       // true (non-empty object)

// Falsy values
console.log(null);                     // false
console.log(undefined);                // false
console.log("");                       // false (empty string)

// Comparison expressions (without console.log first)
console.log(4 > 3);  // true
console.log(4 >= 3); // true
console.log(4 < 3);  // false
console.log(4 <= 3); // false
console.log(4 == 4); // true (loose comparison)
console.log(4 === 4); // true (strict comparison)
console.log(4 != 4); // false
console.log(4 !== 4); // false (strict not equal)
console.log(4 != '4'); // false (loose not equal)
console.log(4 == '4'); // true (loose comparison)
console.log(4 === '4'); // false (strict not equal)

// String length comparison
console.log("python".length != "jargon".length); // true (different lengths)

// Logical operators (without console.log first)
console.log(4 > 3 && 10 < 12);  // true (both conditions true)
console.log(4 > 3 && 10 > 12);  // false (second condition false)
console.log(4 > 3 || 10 < 12);  // true (at least one condition true)
console.log(4 > 3 || 10 > 12);  // true (both conditions true)
console.log(!(4 > 3));         // false (not true)
console.log(!(4 < 3));         // true (not false)
console.log(!false);           // true (not false)
console.log(!(4 > 3 && 10 < 12)); // false (both conditions true, negation is false)
console.log(!(4 > 3 && 10 > 12)); // true (entire expression is false, negation is true)
console.log(!(4 === '4'));     // true (strict not equal)

// 'on' check
console.log(!("dragon".includes("on") && "python".includes("on"))); // true (neither string includes "on")

// Date object
const today = new Date();

console.log(today.getFullYear());  // Year
console.log(today.getMonth() + 1); // Month (0-indexed)
console.log(today.getDate());     // Day of the month
console.log(today.getDay());       // Day of the week (0-indexed)
console.log(today.getHours());     // Hours
console.log(today.getMinutes());   // Minutes
console.log((today.getTime() - new Date(1970, 0, 1).getTime()) / 1000); // Seconds elapsed since 1970-01-01
