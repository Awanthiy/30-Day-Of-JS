async function getAverageCatWeight() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds'); // Fetch all breeds
    const breeds = await response.json();

    let totalWeight = 0;
    let metricBreeds = 0; // Count breeds with weight in metric unit

    for (const breed of breeds) {
      if (breed.weight.metric) { // Check if weight is available in metric unit
        totalWeight += parseFloat(breed.weight.metric.value); // Add weight value (converted to float)
        metricBreeds++;
      }
    }

    const averageWeight = metricBreeds > 0 ? totalWeight / metricBreeds : 'No data available';
    console.log(`Average weight of cats (metric): ${averageWeight} kg`);
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
  }
}

getAverageCatWeight();
