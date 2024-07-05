// Example data
const array = Array(1000000).fill(0);

// While loop
console.time('while loop');
let i = 0;
while (i < array.length) {
    array[i]++;
    i++;
}
console.timeEnd('while loop');

// For loop
console.time('for loop');
for (let j = 0; j < array.length; j++) {
    array[j]++;
}
console.timeEnd('for loop');

// For...of loop
console.time('for...of loop');
for (const item of array) {
    array[array.indexOf(item)]++;
}
console.timeEnd('for...of loop');

// forEach loop
console.time('forEach loop');
array.forEach((item, index) => {
    array[index]++;
});
console.timeEnd('forEach loop');
