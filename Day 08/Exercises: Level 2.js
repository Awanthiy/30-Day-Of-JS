const users = {
  // ... your users data here (as provided before)
};

function analyzeUsers(users) {
  let mostSkilled = null;
  let maxSkills = 0;
  let loggedInCount = 0;
  let highPointsCount = 0;
  const mernDevs = [];

  for (const name in users) {
    const user = users[name];
    const skillCount = user.skills.length;

    if (skillCount > maxSkills) {
      mostSkilled = name;
      maxSkills = skillCount;
    }

    if (user.isLoggedIn) {
      loggedInCount++;
    }
    if (user.points >= 50) {
      highPointsCount++;
    }

    const hasAllMERN = ['MongoDB', 'Express', 'React', 'Node.js'].every(skill => user.skills.includes(skill));
    if (hasAllMERN) {
      mernDevs.push(name);
    }
  }

  console.log(`**User Analysis**`);
  console.log(`${mostSkilled ? `${mostSkilled} has the most skills with ${maxSkills} skills` : 'No users found'}`);
  console.log(`Logged-in users: ${loggedInCount}, Users with >= 50 points: ${highPointsCount}`);
  console.log(`${mernDevs.length > 0 ? `${mernDevs.join(', ')} are MERN stack developers` : 'No MERN stack developers found'}`);
}

// Assuming you have a countries object with appropriate structure
function printCountryDetails(country) {
  console.log(`**Country Details**`);
  console.log(`Country: ${country.name}`);
  console.log(`Capital: ${country.capital}`);
  console.log(`Population: ${country.population}`);
  console.log(`Languages: ${country.languages.join(', ')}`);
}

// Get all user keys and values
const userKeys = Object.keys(users);
const userValues = Object.values(users);

// Call the functions
analyzeUsers(users);

console.log(`**User Keys:** ${userKeys.join(', ')}`);
console.log(`**User Values:**`);
console.table(userValues); // Use console.table for better formatting

// Example country object usage (replace with your actual data)
const sriLanka = {
  name: 'Sri Lanka',
  capital: 'Sri Jayawardenepura Kotte',
  population: 21932000,
  languages: ['Sinhala', 'Tamil', 'English']
};

printCountryDetails(sriLanka);
