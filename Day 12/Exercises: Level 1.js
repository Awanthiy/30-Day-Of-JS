// Calculate Total Annual Income
const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const salaryPerMonth = parseInt(text.match(/\d+(?= euro from salary per month)/)[0]);
const annualBonus = parseInt(text.match(/\d+(?= euro annual bonus)/)[0]);
const onlineCoursesPerMonth = parseInt(text.match(/\d+(?= euro online courses per month)/)[0]);

const totalMonthlyIncome = salaryPerMonth + onlineCoursesPerMonth;
const annualIncome = totalMonthlyIncome * 12 + annualBonus;

console.log("Total annual income:", annualIncome, "euro");


// Distance Between Furthest Particles
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];

const sortedPoints = points.map(point => parseInt(point)).sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log("Distance between furthest particles:", distance);


// Valid JavaScript Variable Pattern
function isValidVariable(variableName) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(variableName);
}

console.log(isValidVariable('first_name'));  // True
console.log(isValidVariable('first-name'));  // False
console.log(isValidVariable('1first_name')); // False
console.log(isValidVariable('firstname'));  // True
