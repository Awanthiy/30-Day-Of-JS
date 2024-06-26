const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b); // Sort in ascending order

// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Min Age: ${minAge}, Max Age: ${maxAge}`); // Output: Min Age: 19, Max Age: 26

// Find median age
const medianIndex = Math.floor(ages.length / 2);
const median = ages.length % 2 === 0 ? (ages[medianIndex] + ages[medianIndex - 1]) / 2 : ages[medianIndex];
console.log(`Median Age: ${median}`); // Output: Median Age: 24 (or 24.5 if even number of elements)

// Find average age
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;
console.log(`Average Age: ${averageAge.toFixed(2)}`); // Output: Average Age: 22.80

// Find range of ages
const range = maxAge - minAge;
console.log(`Range: ${range}`); // Output: Range: 7

// Compare absolute value of (min - average) and (max - average)
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log(`Difference from Average: Min: ${minDiff.toFixed(2)}, Max: ${maxDiff.toFixed(2)}`);
// Output: Difference from Average: Min: 3.80, Max: 3.20

// Slice first 10 countries (assuming you have a `countries` array)
const slicedCountries = countries.slice(0, 10); // Slice the first 10 elements
console.log(slicedCountries);

// Find middle country(ies)
const middleIndex = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0 ? [countries[middleIndex], countries[middleIndex - 1]] : [countries[middleIndex]];
console.log(`Middle Country(ies): ${middleCountries}`); // Output: Middle Country(ies): ["Country Name"] (or ["Country 1", "Country 2"] if even)

// Divide countries array into two equal arrays (if even) or one more for the first half (if odd)
const halfLength = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfLength);
const secondHalf = countries.length % 2 === 0 ? countries.slice(halfLength) : countries.slice(halfLength + 1); // Account for odd length
console.log(`First Half: ${firstHalf}`); // Output: First Half: ["Country Names"]
console.log(`Second Half: ${secondHalf}`); // Output: Second Half: ["Country Names"] (or empty if odd)
