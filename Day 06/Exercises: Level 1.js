Iterating from 0 to 10 and 10 to 0:

JavaScript
// for loop (0 to 10)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop (0 to 10)
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

// do-while loop (0 to 10)
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

// for loop (10 to 0)
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// while loop (10 to 0)
let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

// do-while loop (10 to 0)
let k = 10;
do {
  console.log(k);
  k--;
} while (k >= 0);
Use code with caution.
content_copy
Iterating from 0 to n:

JavaScript
function iterateToN(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

iterateToN(15); // Example usage with n = 15
Use code with caution.
content_copy
Hash Pattern:

JavaScript
for (let i = 1; i <= 7; i++) {
  let hash = '';
  for (let j = 1; j <= i; j++) {
    hash += '#';
  }
  console.log(hash);
}
Use code with caution.
content_copy
Multiplication Table Pattern:

JavaScript
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
Use code with caution.
content_copy
Exponentiation Pattern:

JavaScript
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i * i}   ${i * i * i}`);
}
Use code with caution.
content_copy
Printing Even Numbers:

JavaScript
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
Use code with caution.
content_copy
Printing Odd Numbers:

JavaScript
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
Use code with caution.
content_copy
Printing Prime Numbers (Sieve of Eratosthenes):

JavaScript
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
Use code with caution.
content_copy
Calculating Sum of All Numbers:

JavaScript
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log('Sum of all numbers:', sum); // Output: Sum of all numbers: 5050
Use code with caution.
content_copy
Calculating Sum of Evens and Odds (Separate Variables):

JavaScript
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
console.log('Sum of evens:', sumEvens);
console.log('Sum of odds:', sumOdds);  
