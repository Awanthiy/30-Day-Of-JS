// Create an empty object
const dog = {};

// Print the empty object
console.log(dog); // Output: {}

// Add properties
dog.name = "Fido";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;

// Define a method for bark
dog.bark = function() {
  return "woof woof";
};

// Get and print property values
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark()); // Call the method to get the bark sound

// Set new properties
dog.breed = "Golden Retriever";

// Create a method to get dog information
dog.getDogInfo = function() {
  return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
};

// Get and print dog information using the new method
console.log("Dog Info:", dog.getDogInfo());
