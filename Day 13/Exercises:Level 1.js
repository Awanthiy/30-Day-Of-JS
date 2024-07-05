// Example data
let countriesArray = [
    'United States',
    'Canada',
    'Mexico',
    'Germany',
    'France'
];

let countriesObject = {
    'United States': 'Washington D.C.',
    'Canada': 'Ottawa',
    'Mexico': 'Mexico City',
    'Germany': 'Berlin',
    'France': 'Paris'
};

// Display countries array as a table
console.group('Countries Array');
console.table(countriesArray);
console.groupEnd();

// Display countries object as a table
console.group('Countries Object');
console.table(countriesObject);
console.groupEnd();
