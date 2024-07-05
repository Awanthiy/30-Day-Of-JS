const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  // ... other users
];

users.forEach(user => {
  // Destructuring with default value for skills
  const { skills = [], ...otherProperties } = user;

  // Get object keys (excluding name)
  const userKeys = Object.keys(otherProperties);

  console.log(`${user.name}'s object keys:`, userKeys);

  // Check for less than two skills
  if (skills.length < 2) {
    console.log(`${user.name} has less than two skills`);
  }
});
