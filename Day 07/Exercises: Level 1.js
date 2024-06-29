// Function to print out a full name (assuming you don't have a pre-defined name)
function fullName() {
  console.log("I am Bard, a large language model from Google AI."); // Replace with your actual full name if desired
}

// Function to construct a full name from first and last names
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Function to calculate the area of a rectangle
function areaOfRectangle(length, width) {
  return length * width;
}

// Function to calculate the perimeter of a rectangle
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

// Function to calculate the volume of a rectangular prism
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

// Function to calculate the area of a circle (assuming PI is a constant)
function areaOfCircle(radius) {
  const PI = 3.14159; // Replace with a more precise PI value if needed
  return PI * radius * radius;
}

// Function to calculate the circumference of a circle (assuming PI is a constant)
function circumOfCircle(radius) {
  const PI = 3.14159; // Replace with a more precise PI value if needed
  return 2 * PI * radius;
}

// Function to calculate the density of a substance
function density(mass, volume) {
  return mass / volume;
}

// Function to calculate the speed of a moving object
function speed(distance, time) {
  return distance / time;
}

// Function to calculate the weight of a substance (assuming Earth's gravity)
function weight(mass, gravity = 9.81) { // Set default gravity to Earth's
  return mass * gravity;
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Function to calculate Body Mass Index (BMI)
function bmi(weightInKg, heightInMeters) {
  return weightInKg / (heightInMeters * heightInMeters);
}

// Function to check weight category based on BMI
function checkWeightCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Function to determine season based on month (assuming Northern Hemisphere)
function checkSeason(month) {
  const seasons = {
    12: "Winter",
    1: "Winter",
    2: "Winter",
    3: "Spring",
    4: "Spring",
    5: "Spring",
    6: "Summer",
    7: "Summer",
    8: "Summer",
    9: "Autumn",
    10: "Autumn",
    11: "Autumn",
  };
  return seasons[month] || "Invalid month"; // Handle invalid months
}

// Function to find the maximum of three numbers without Math.max
function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}

// Example usage
fullName(); // Prints your full name (replace with your actual name if desired)
console.log(fullName("Alice", "Smith"));  // Output: Alice Smith
console.log(addNumbers(5, 3));            // Output: 8
console.log(areaOfRectangle(4, 6));       // Output: 24
console.log(perimeterOfRectangle(4, 6));   // Output: 20
console.log(volumeOfRectPrism(3, 2, 1));   // Output: 6
console
