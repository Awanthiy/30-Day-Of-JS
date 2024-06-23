//Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//Using console.log() print out the following quote by Mother Teresa:
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let strNum = '10';
if (typeof strNum !== typeof 10) {
  strNum = Number(strNum);
}
console.log(strNum); // Should print 10

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatNum = parseFloat('9.8');
if (floatNum !== 10) {
  floatNum = Math.ceil(floatNum);
}
console.log(floatNum); // Should print 10

// Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on') && word2.includes('on')); // Should print true

// Check if 'jargon' is in the sentence 'I hope this course is not full of jargon.'
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); // Should print true

// Generate a random number between 0 and 100 inclusively.
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1); // Should print a number between 0 and 100

// Generate a random number between 50 and 100 inclusively.
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2); // Should print a number between 50 and 100

// Generate a random number between 0 and 255 inclusively.
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3); // Should print a number between 0 and 255

// Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]); // Should print a random character from 'JavaScript'

// Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
//12
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let start = sentence.indexOf('because because because');
let length = 'because because because'.length;
let slicedPhrase = sentence.substr(start, length);
console.log(slicedPhrase); // Should print 'because because because'
