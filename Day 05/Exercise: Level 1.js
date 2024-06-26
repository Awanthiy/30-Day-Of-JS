// 1. Empty Array Declaration
let emptyArray = [];
console.log(emptyArray); // Output: []

// 2. Array with More Than 5 Elements
let numbersArray = [1, 2, 3, 4, 5, 6, 7];
console.log(numbersArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// 3. Array Length
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia'];
console.log(countries.length); // Output: 5

// 4. First, Middle, and Last Items
console.log(countries[0]); // Output: Albania (first item)
console.log(countries[Math.floor(countries.length / 2)]); // Output: Denmark (middle)
console.log(countries[countries.length - 1]); // Output: Ethiopia (last)

// 5. Mixed Data Type Array
let mixedDataTypes = [
  'Hello World!', // String
  42, // Number
  true, // Boolean
  { name: 'Alice' }, // Object
  null // Null
];
console.log(mixedDataTypes); // Output: ["Hello World!", 42, true, { name: 'Alice' }, null]
console.log(mixedDataTypes.length); // Output: 5

// 6. itCompanies Array and Printing
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies); // Output: ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies.length); // Output: 7

console.log(itCompanies[0]); // Output: Facebook (first)
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // Output: Microsoft (middle)
console.log(itCompanies[itCompanies.length - 1]); // Output: Amazon (last)

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]); // Print each company
}

// 7. Uppercase Company Names
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(itCompanies[i]); // Print uppercase names
}

// 8. Sentence-Style Output
let companyString = itCompanies.join(', '); // Join elements with comma and space
companyString += ' are big IT companies.';
console.log(companyString); // Output: FACEBOOK, GOOGLE, MICROSOFT, APPLE, IBM, ORACLE, AMAZON are big IT companies.

// 9. Company Existence Check
function checkCompany(companyName) {
  return itCompanies.includes(companyName) ? companyName : 'Company not found';
}

console.log(checkCompany('Facebook')); // Output: Facebook
console.log(checkCompany('Netflix')); // Output: Company not found

// 10. Companies with More Than One 'o' (No Filter Method)
let companiesWithTwoOs = [];
for (let company of itCompanies) {
  if (company.split('o').length - 1 > 1) {
    companiesWithTwoOs.push(company);
  }
}

console.log(companiesWithTwoOs); // Output: ["Google", "Oracle"] (may be empty)

// 11. Sorting and Reversing
itCompanies.sort(); // Sort alphabetically
console.log(itCompanies); // Output: ["Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle"]

itCompanies.reverse(); // Reverse the order
console.log(itCompanies); // Output: ["Oracle", "Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon"]

// 12. Slicing
console.log(itCompanies.slice(0, 3)); // Output: ["Oracle", "Microsoft", "IBM"] (first 3)
console.log(itCompanies.slice(-3)); // Output: ["Apple", "Facebook", "Amazon"] (last 3)
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)); // Output
