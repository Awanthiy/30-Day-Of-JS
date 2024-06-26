// Accessing data from separate files
const countries = require('./countries.js').countries; // Import countries array
const webTechs = require('./web_techs.js').webTechs; // Import webTechs array

// Text Processing - Remove Punctuations and Count Words
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[^a-zA-Z ]/g, '').split(' '); // Remove punctuation and split into array
console.log(words);
console.log(words.length); // Output: ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(words.length); // Output: 13

// Shopping Cart Operations
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat'); // Add 'Meat' at the beginning
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar'); // Add 'Sugar' at the end
}

if (/* You are allergic to honey */) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1); // Remove 'Honey'
  }
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'; // Modify 'Tea'

console.log(shoppingCart); // Output: ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]

// Country and Web Tech Check
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries); // Print updated countries array
}

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs); // Print updated webTechs array
}

// Full Stack Concatenation
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd); // Combine arrays using concat
console.log(fullStack); // Output: ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
