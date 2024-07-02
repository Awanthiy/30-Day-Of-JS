const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Find union (unique elements)
const union = new Set([...a, ...b]);
console.log("Union of a and b:", [...union]);

// Find intersection
const intersection = a.filter(x => b.includes(x));
console.log("Intersection of a and b:", intersection);

// Find elements in a or b or both (combined approach)
const combined = new Set([...a, ...b]);
console.log("Elements in a or b or both:", [...combined]);
