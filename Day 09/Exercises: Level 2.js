const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia', 'Russia'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// forEach
countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));

// map
const upperCaseCountries = countries.map(country => country.toUpperCase());
const countryLengths = countries.map(country => country.length);
const squaredNumbers = numbers.map(number => number * number);
const upperCaseNames = names.map(name => name.toUpperCase());
const productPrices = products.map(product => product.price);

console.log(upperCaseCountries);
console.log(countryLengths);
console.log(squaredNumbers);
console.log(upperCaseNames);
console.log(productPrices);

// filter
const noLandCountries = countries.filter(country => !country.includes('land')); // Filter out countries containing "land"
const sixLetterCountries = countries.filter(country => country.length === 6); // Filter out countries with six characters
const longCountries = countries.filter(country => country.length >= 6); // Filter out countries with six letters and more
const eCountries = countries.filter(country => country.startsWith('E')); // Filter out country starting with 'E'

console.log(noLandCountries);
console.log(sixLetterCountries);
console.log(longCountries);
console.log(eCountries);

// getStringLists function
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

const stringItems = getStringLists(products);
console.log(stringItems); // Only products with string properties

// reduce
const sum = numbers.reduce((acc, number) => acc + number, 0); // Initialize accumulator to 0
const countrySentence = countries.reduce((acc, country, index) => {
  const separator = index === countries.length - 1 ? ' and ' : ', ';
  return acc + country + separator;
}, ''); // Initialize accumulator to empty string

console.log(sum);
console.log(countrySentence.slice(0, -2) + ' are north European countries'); // Remove the trailing comma and space

// some and every
const someLongName = names.some(name => name.length > 7); // Check if at least one element in the array satisfies a provided condition
const allLandCountries = countries.every(country => country.includes('land')); // Check if all elements in the array satisfy a provided condition

console.log(someLongName);
console.log(allLandCountries);

// Find total price with chained iterators
const totalPriceChained = products.map(product => product.price) // Extract prices
  .filter(price => typeof price === 'number') // Filter out non-numeric prices
  .reduce((acc, price) => acc + price, 0); // Reduce to sum

console.log("Total Price (Chained):", totalPriceChained);

// Find total price with single reduce
const totalPriceSingleReduce = products.reduce((acc, product) => {
  const price = typeof product.price === 'number' ? product.price : 0; // Handle non-numeric prices
  return acc + price;
}, 0); // Initialize accumulator to 0

console.log("Total Price (Single reduce):", totalPriceSingleReduce);

// categorizeCountries Function
function categorizeCountries(pattern) {
  return countries.filter(country => country.toLowerCase().includes(pattern));
}

const landCountries = categorizeCountries('land');
const iaCountries = categorizeCountries('ia');
const islandStanCountries = categorizeCountries(/island|stan/i); // Case-insensitive search

console.log("Land Countries:", landCountries);
console.log("ia Countries:", iaCountries);
console.log("Island/Stan Countries:", island
