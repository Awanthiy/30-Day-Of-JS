// Assuming countries data is imported from countries_data.js

// Sort countries by name, capital, population
function sortCountries(countries, criteria) {
  return countries.slice().sort((a, b) => {
    if (criteria === 'name') {
      return a.name.localeCompare(b.name); // Locale-sensitive comparison
    } else if (criteria === 'capital') {
      return a.capital.localeCompare(b.capital);
    } else if (criteria === 'population') {
      return b.population - a.population; // Descending for population
    } else {
      throw new Error("Invalid criteria for sorting countries");
    }
  });
}

const nameSorted = sortCountries(countries, 'name');
const capitalSorted = sortCountries(countries, 'capital');
const populationSorted = sortCountries(countries, 'population');

console.log("Sorted by Name:", nameSorted);
console.log("Sorted by Capital:", capitalSorted);
console.log("Sorted by Population (Descending):", populationSorted);

// Most spoken languages
function mostSpokenLanguages(countries, n) {
  const allLanguages = countries.reduce((acc, country) => {
    country.languages.forEach(lang => {
      acc[lang.country] = (acc[lang.country] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedLanguages = Object.entries(allLanguages)
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .slice(0, n); // Take top n

  return sortedLanguages.map(([country, count]) => ({ country, count }));
}

console.log("Most Spoken Languages (Top 10):", mostSpokenLanguages(countries, 10));
console.log("Most Spoken Languages (Top 3):", mostSpokenLanguages(countries, 3));

// Most populated countries
function mostPopulatedCountries(countries, n) {
  return countries.slice().sort((a, b) => b.population - a.population).slice(0, n);
}

console.log("Most Populated Countries (Top 10):", mostPopulatedCountries(countries, 10));
console.log("Most Populated Countries (Top 3):", mostPopulatedCountries(countries, 3));

// Statistics Object
class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    this.data.sort((a, b) => a - b);
    const midIndex = Math.floor(this.data.length / 2);
    return this.data.length % 2 === 0
      ? (this.data[midIndex] + this.data[midIndex - 1]) / 2
      : this.data[midIndex];
  }

  mode() {
    const counts = {};
    let maxCount = 0;
    let mode;

    for (const val of this.data) {
      counts[val] = (counts[val] || 0) + 1;
      if (counts[val] > maxCount) {
        maxCount = counts[val];
        mode = val;
      }
    }

    return maxCount > 1 ? { mode, count: maxCount } : null;
  }

  variance() {
    const mean = this.mean();
    return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count();
  }

  std() {
    return Math.sqrt(this.variance());
  }

  freqDist() {
    const counts = {};
    for (const val of this.data) {
      counts[val] = (counts[val] || 0) + 1;
    }
    return Object
