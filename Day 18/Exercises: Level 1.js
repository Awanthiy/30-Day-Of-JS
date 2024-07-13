async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all'); // Fetch data
    const countries = await response.json(); // Parse JSON response

    for (const country of countries) {
      const { name, capital, languages, population, area } = country; // Destructuring for easier access

      console.log(`
        Country: ${name.common}
        Capital: ${capital[0]}
        Languages: ${languages.join(', ')}
        Population: ${population}
        Area: ${area} km²
      `);
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

fetchCountries();
