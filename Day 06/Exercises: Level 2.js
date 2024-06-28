const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Generate random ID of any length (alphanumeric or with special characters)
function generateRandomId(length, chars) {
  const characterSet = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return randomString;
}

// Generate random hexadecimal color code
function generateRandomHexColor() {
  const hexChars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}

// Generate random RGB color code
function generateRandomRgbColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Create new array with uppercase countries
const uppercaseCountries = countries.map(country => country.toUpperCase());
console.log(uppercaseCountries); // ["ALBANIA", "BOLIVIA", ...]

// Create array with country name lengths
const countryLengths = countries.map(country => country.length);
console.log(countryLengths); // [7, 7, ...]

// Create array of arrays with country info
const countryDetails = countries.map(country => {
  const abbreviation = country.slice(0, 3).toUpperCase();
  return [country, abbreviation, country.length];
});
console.log(countryDetails);
// [[...]...]

// Find countries containing 'land'
const landCountries = countries.filter(country => country.toLowerCase().includes('land'));
console.log(landCountries.length > 0 ? landCountries : 'All these countries are without land');

// Find countries ending with 'ia'
const iaCountries = countries.filter(country => country.toLowerCase().endsWith('ia'));
console.log(iaCountries.length > 0 ? iaCountries : 'These are countries ends without ia');

// Find country with the most characters
const longestCountry = countries.reduce((longest, current) => (current.length > longest.length ? current : longest), countries[0]);
console.log(longestCountry);

// Find countries with 5 characters
const fiveCharCountries = countries.filter(country => country.length === 5);
console.log(fiveCharCountries);

// Find the longest word in webTechs array
const longestWebTech = webTechs.reduce((longest, current) => (current.length > longest.length ? current : longest), webTechs[0]);
console.log(longestWebTech);

// Create array with webTechs and their lengths
const webTechDetails = webTechs.map(tech => [tech, tech.length]);
console.log(webTechDetails); // [[...]...]

// Create MERN acronym from mernStack array
const MERN = mernStack.join('').toUpperCase();
console.log(MERN); // MERN

// Iterate through webTechs array using for loop
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

// Iterate through webTechs array using for...of loop
for (const tech of webTechs) {
  console.log(tech);
}

// Reverse fruit array (without reverse method)
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
