class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  makeSound() {
    console.log("Generic animal sound"); // Base sound (can be overridden)
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs); // Call parent constructor
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} barks!`);
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, furLength) {
    super(name, age, color, legs); // Call parent constructor
    this.furLength = furLength;
  }

  makeSound() {
    console.log(`${this.name} meows!`);
  }
}

// Create animal objects
const animal = new Animal("Leo", 3, "Brown", 4);
const dog = new Dog("Buddy", 2, "Black", 4, "Labrador");
const cat = new Cat("Whiskers", 1, "White", 4, "Long");

// Make them speak!
animal.makeSound(); // Generic animal sound (base class method)
dog.makeSound();    // Buddy barks!
cat.makeSound();    // Whiskers meows!
