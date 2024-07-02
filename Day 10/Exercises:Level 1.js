const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// 1. Create an empty set
const emptySet = new Set();

// 2. Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}

// 3. Remove an element from a set (assuming you want to remove 4 from set a)
a.splice(a.indexOf(4), 1); // This modifies the original array a
// To remove from a set, you can use the delete method:
const numberSetCopy = new Set(numberSet); // Create a copy to avoid modifying original
numberSetCopy.delete(4);

// 4. Clear a set
numberSet.clear(); // This will empty the numberSet

// 5. Create a set of 5 string elements from array (assuming you want the first 5 elements of countries)
const stringSet = new Set(countries.slice(0, 5)); // Use slice to get the first 5 elements

// 6. Create a map of countries and number of characters of a country
const countryLengthsMap = new Map();
countries.forEach(country => countryLengthsMap.set(country, country.length));
