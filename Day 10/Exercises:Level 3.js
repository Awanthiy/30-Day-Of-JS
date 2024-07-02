// Assuming countries data is imported from countries_data.js

function mostSpokenLanguages(countries, n) {
  const allLanguages = {};

  // Count language occurrences across all countries
  for (const country of countries) {
    for (const lang of country.languages) {
      allLanguages[lang.country] = (allLanguages[lang.country] || 0) + 1;
    }
  }

  // Sort languages by count (descending) and select top n
  const sortedLanguages = Object.entries(allLanguages)
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .slice(0, n);

  // Convert to desired output format
  return sortedLanguages.map(([country, count]) => ({ [country]: count })); // Use object literal for country as key
}

// 1. Count total languages (assuming each language object has a unique name)
const totalLanguages = new Set().size; // Assuming unique language names

// 2. Find 10 most spoken languages
console.log("10 Most Spoken Languages:", mostSpokenLanguages(countries, 10));

// 3. Find 3 most spoken languages
console.log("3 Most Spoken Languages:", mostSpokenLanguages(countries, 3));
