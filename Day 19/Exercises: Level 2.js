function createCalculator() {
  let result = 0; // Inner variable to store the current result

  // Inner function for addition
  function add(value) {
    result += value;
    return result;
  }

  // Inner function for subtraction
  function subtract(value) {
    result -= value;
    return result;
  }

  // Inner function to retrieve the current result
  function getResult() {
    return result;
  }

  return { add, subtract, getResult }; // Return an object with inner functions
}

// Usage example
const calculator = createCalculator();

console.log(calculator.add(5));      // Output: 5
console.log(calculator.subtract(2)); // Output: 3
console.log(calculator.getResult());  // Output: 3
