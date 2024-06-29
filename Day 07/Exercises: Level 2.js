function multiFunction(option, ...args) {
  // Function options with corresponding logic
  const functions = {
    fullName(firstName, lastName) {
      return `${firstName} ${lastName}`;
    },
    addNumbers(num1, num2) {
      return num1 + num2;
    },
    areaOfRectangle(length, width) {
      return length * width;
    },
    // ... Add other functions from previous responses here ...
    solveLinEquation(a, b, c) {
      // ... Linear equation solver logic ...
    },
    solveQuadEquation(a, b, c) {
      // ... Quadratic equation solver logic ...
    },
    printArray(arr) {
      for (const element of arr) {
        console.log(element);
      }
    },
    showDateTime() {
      // ... Date and time display logic ...
    },
    swapValues(x, y) {
      let temp = x;
      x = y;
      y = temp;
      console.log(`x: ${x}, y: ${y}`); // Print swapped values for demonstration
    },
    reverseArray(arr) {
      const reversed = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
      }
      return reversed;
    },
    capitalizeArray(arr) {
      return arr.map(element => element.toString().toUpperCase());
    },
    // ... Add other functions from previous responses here ...
    sum(
