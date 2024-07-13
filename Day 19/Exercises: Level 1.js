function createGreeter(greeting) {
  // Inner function to perform the greeting
  function greet(name) {
    return `${greeting}, ${name}!`;
  }

  return greet; // Return the inner function for later use
}

// Usage example
const morningGreeter = createGreeter("Good Morning");
const eveningGreeter = createGreeter("Good Evening");

console.log(morningGreeter("Alice"));  // Output: Good Morning, Alice!
console.log(eveningGreeter("Bob"));    // Output: Good Evening, Bob!
