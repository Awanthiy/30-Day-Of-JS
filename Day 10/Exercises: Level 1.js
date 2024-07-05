const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

// Destructuring constants array
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructuring countries array
const [fin, est, sw, den, nor] = countries;

// Destructuring rectangle object
const { width, height, area, perimeter } = rectangle;

console.log("e:", e);
console.log("pi:", pi);
console.log("gravity:", gravity);
console.log("humanBodyTemp:", humanBodyTemp);
console.log("waterBoilingTemp:", waterBoilingTemp);

console.log("fin:", fin);
console.log("est:", est);
console.log("sw:", sw);
console.log("den:", den);
console.log("nor:", nor);

console.log("width:", width);
console.log("height:", height);
console.log("area:", area);
console.log("perimeter:", perimeter);
