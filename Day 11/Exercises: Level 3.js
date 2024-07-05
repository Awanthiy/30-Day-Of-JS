// Destructuring countries object (assuming it exists)
const countries = {
  name: "France",
  capital: "Paris",
  population: 65.3, // million
  languages: ["French", "Occitan", "Breton"]
};

const { name, capital, population: populationInMillions, languages } = countries;

console.log("Name:", name);
console.log("Capital:", capital);
console.log("Population (millions):", populationInMillions);
console.log("Languages:", languages);


// Destructuring student array
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, scores, jsScore = scores[2], reactScore = scores[3]] = student;

console.log(name, skills, jsScore, reactScore);


// convertArrayToObject function
function convertArrayToObject(students) {
  return students.map(student => ({
    name: student[0],
    skills: student[1],
    scores: student[2]
  }));
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));


// Copying and modifying student object
const originalStudent = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
};

const newStudent = { ...originalStudent }; // Spread operator for copying

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

console.log(newStudent);
console.log("Original student remains unchanged:", originalStudent);
