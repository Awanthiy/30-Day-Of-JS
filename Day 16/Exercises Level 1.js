const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
let age = 250;
let isMarried = true;
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
};

// Stringify the skills array
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); // Output: ["HTML","CSS","JS","React","Node","Python"]

// Stringify the age variable (assuming it's meant to be a string representation)
const ageString = JSON.stringify(age);
console.log(ageString); // Output: "250"  (Note: String representation of a number)

// Stringify the isMarried variable (assuming a boolean value)
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON); // Output: true  (JSON represents boolean values directly)

// Stringify the student object
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
// Output: {"firstName":"Asabeneh","lastName":"Yetayehe","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]}
