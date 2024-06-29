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
    // New functions
    userIdGeneratedByUser() {
      const numIds = parseInt(prompt("Enter the number of IDs to generate:"));
      const charCount = parseInt(prompt("Enter the desired ID length:"));
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let generatedIds = [];
      for (let i = 0; i < numIds; i++) {
        let id = "";
        for (let j = 0; j < charCount; j++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        generatedIds.push(id);
      }
      return generatedIds;
    },
    rgbColorGenerator() {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`;
    },
    arrayOfHexaColors(numColors) {
      const colors = [];
      for (let i = 0; i < numColors; i++) {
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
      }
      return colors;
    },
    arrayOfRgbColors(numColors) {
      const colors = [];
      for (let i = 0; i < numColors; i++) {
        colors.push(this.rgbColorGenerator());
      }
      return colors;
    },
    convertHexaToRgb(hexa) {
      const r = parseInt(hexa.substring(1, 3), 16);
      const g = parseInt(hexa.substring(3, 5), 16);
      const b = parseInt(hexa.substring(5, 7), 16);
      return `rgb(${r}, ${g}, ${b})`;
    },
    convertRgbToHexa(rgb) {
      const rgbValues = rgb.substring(4, rgb.length - 1).split(",").map(v => parseInt(v));
      const r = rgbValues[0].toString(16).padStart(2, '0');
      const g = rgbValues[1].toString(16).padStart(2, '0');
      const b = rgbValues[2].toString(16).padStart(2, '0');
      return `#<span class="math-inline">\{r\}</span>{g}${b}`;
    },
    generateColors(type, numColors) {
      if (type === 'hexa') {
        return this.arrayOfHexaColors(numColors);
      } else if (type === 'rgb') {
        return this.arrayOfRgbColors(numColors);
      } else {
        return 'Invalid color type.
