// Driving age check
function drivingAgeCheck() {
  const age = parseInt(prompt("Enter your age: "));
  const requiredAge = 18;

  if (age >= requiredAge) {
    console.log("You are old enough to drive.");
  } else {
    const yearsLeft = requiredAge - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
  }
}

drivingAgeCheck(); // Call the function

// Age comparison
function compareAges() {
  const myAge = 23;  
  const yourAge = parseInt(prompt("Enter your age: "));

  if (myAge > yourAge) {
    console.log(`You are ${myAge - yourAge} years younger than me.`);
  } else if (myAge < yourAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
  } else {
    console.log("We are the same age.");
  }
}

compareAges(); // Call the function

// Number comparison using if-else
function compareNumbers1(a, b) {
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else {
    return `${a} is less than ${b}`;
  }
}

// Number comparison using ternary operator
function compareNumbers2(a, b) {
  return a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
}

let a = 4;
let b = 3;

console.log(compareNumbers1(a, b)); // Using if-else
console.log(compareNumbers2(a, b)); // Using ternary operator

// Even or odd number check
function evenOddCheck() {
  const number = parseInt(prompt("Enter a number: "));
  const remainder = number % 2;

  if (remainder === 0) {
    console.log(`${number} is an even number.`);
  } else {
    console.log(`${number} is an odd number.`);
  }
}

evenOddCheck(); // Call the function
