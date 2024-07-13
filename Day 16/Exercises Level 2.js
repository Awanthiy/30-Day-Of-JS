const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
};

// Function to select specific properties for stringification
function selectProperties(obj, properties) {
  const selected = {};
  for (const prop of properties) {
    if (obj.hasOwnProperty(prop)) {
      selected[prop] = obj[prop];
    }
  }
  return selected;
}

// Select desired properties and stringify
const studentSubset = selectProperties(student, ['firstName', 'lastName', 'skills']);
const studentSubsetJSON = JSON.stringify(studentSubset);
console.log(studentSubsetJSON);
// Output: {"firstName":"Asabeneh","lastName":"Yetayehe","skills":["HTML","CSS","JS","React","Node","Python"]}
