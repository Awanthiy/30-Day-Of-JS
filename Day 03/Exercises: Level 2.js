// Area of a triangle
function triangleArea(base, height) {
  const area = 0.5 * base * height;
  console.log(`The area of the triangle is ${area}`);
}

// Prompt user for base and height
let base = parseFloat(prompt("Enter base of the triangle: "));
let height = parseFloat(prompt("Enter height of the triangle: "));
triangleArea(base, height);

// Perimeter of a triangle
function trianglePerimeter(a, b, c) {
  const perimeter = a + b + c;
  console.log(`The perimeter of the triangle is ${perimeter}`);
}

// Prompt user for sides
a = parseFloat(prompt("Enter side a of the triangle: "));
b = parseFloat(prompt("Enter side b of the triangle: "));
c = parseFloat(prompt("Enter side c of the triangle: "));
trianglePerimeter(a, b, c);

// Area and perimeter of a rectangle
function rectangle(length, width) {
  const area = length * width;
  const perimeter = 2 * (length + width);
  console.log(`The area of the rectangle is ${area}`);
  console.log(`The perimeter of the rectangle is ${perimeter}`);
}

// Prompt user for length and width
length = parseFloat(prompt("Enter length of the rectangle: "));
width = parseFloat(prompt("Enter width of the rectangle: "));
rectangle(length, width);

// Area and circumference of a circle
function circle(radius) {
  const pi = 3.14;
  const area = pi * radius * radius;
  const circumference = 2 * pi * radius;
  console.log(`The area of the circle is ${area}`);
  console.log(`The circumference of the circle is ${circumference}`);
}

// Prompt user for radius
radius = parseFloat(prompt("Enter radius of the circle: "));
circle(radius);

// Slope, x-intercept, and y-intercept of a linear equation
function linearEquation(equation) {
  const slope = equation.split("x")[1].split(" ")[0];
  const yIntercept = parseFloat(equation.split("=")[1]);
  console.log(`Slope (m): ${slope}`);
  console.log(`Y-intercept (b): ${yIntercept}`);
}

// Prompt user for equation
equation = prompt("Enter a linear equation (e.g., y = 2x - 2): ");
linearEquation(equation);

// Slope between two points
function slopeTwoPoints(x1, y1, x2, y2) {
  const slope = (y2 - y1) / (x2 - x1);
  console.log(`Slope between points (${x1}, <span class="math-inline">\{y1\}\) and \(</span>{x2}, ${y2}): ${slope}`);
}

// Prompt user for coordinates
x1 = parseFloat(prompt("Enter x-coordinate of first point: "));
y1 = parseFloat(prompt("Enter y-coordinate of first point: "));
x2 = parseFloat(prompt("Enter x-coordinate of second point: "));
y2 = parseFloat(prompt("Enter y-coordinate of second point: "));
slopeTwoPoints(x1, y1, x2, y2);

// Calculate y for a quadratic equation
function quadratic(a, b, c, x) {
  const y = a * x * x + b * x + c;
  console.log(`Value of y for x = ${x} is: ${y}`);
}

// Prompt user for coefficients and x value
a = parseFloat(prompt("Enter coefficient a of the quadratic equation: "));
b = parseFloat(prompt("Enter coefficient b of the quadratic equation: "));
c = parseFloat(prompt("Enter coefficient c of the quadratic equation: "));
x = parseFloat(prompt("Enter a value for x: "));
quadratic(a, b, c, x);

// Calculate weekly pay
function weeklyPay(hours, rate) {
  const weeklyEarning = hours * rate;
  console.log(`Your weekly earning is ${weeklyEarning}`);
}

// Prompt user for hours and rate
hours = parseFloat(prompt("Enter number of hours worked: "));
rate = parseFloat(prompt("Enter hourly rate: "));
weeklyPay(hours, rate);

// Check name length
function checkNameLength(firstName, lastName) {
  if (firstName.length > 7) {
    console.log("Your name is long");
  } else {
    console.log("Your name is short");
  }

  if (firstName.length > lastName.
