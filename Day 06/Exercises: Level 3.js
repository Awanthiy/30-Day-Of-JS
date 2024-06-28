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

// Copying countries array (avoid mutation)
const sortedCountries = [...countries];
sortedCountries.sort();

console.log('Original countries:', countries);
console.log('Sorted copy:', sortedCountries);  // Unmodified original, sorted copy

// Sorting webTechs and mernStack (in-place modification)
webTechs.sort();
mernStack.sort();

console.log('Sorted webTechs:', webTechs);
console.log('Sorted mernStack:', mernStack);

// Finding countries containing 'land'
const landCountries = countries.filter(country => country.toLowerCase().includes('land'));

console.log('Countries with "land":', landCountries);

// Finding country with the highest number of characters
const longestCountry = countries.reduce((longest, current) => (current.length > longest.length ? current : longest), countries[0]);

console.log('Country with most characters:', longestCountry);

// Extracting countries containing only four characters
const fourCharCountries = countries.filter(country => country.length === 4);

console.log('Four-character countries:', fourCharCountries);

// Extracting countries containing two or more words
const twoWordCountries = countries.filter(country => country.split(' ').length > 1);

console.log('Countries with two or more words:', twoWordCountries);

// Reversing and capitalizing countries
const reversedCapitalizedCountries = countries.slice().reverse().map(country => country.toUpperCase());

console.log('Reversed and capitalized countries:', reversedCapitalizedCountries);
