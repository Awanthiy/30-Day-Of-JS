// Count the number of times the word 'love' appears in the sentence.
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveMatches = sentence1.match(/love/gi);
let loveCount = loveMatches ? loveMatches.length : 0;
console.log(loveCount);  

// Use match() to count the number of times the word 'because' appears in the sentence.
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let becauseMatches = sentence2.match(/because/g);
let becauseCount = becauseMatches ? becauseMatches.length : 0;
console.log(becauseCount);  
//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Step 1: Clean the text using replace() with regular expressions
const cleanedText = sentence.replace(/[%,@$&#!;.?]/g, '');

// Step 2: Split the text into words using split() and handle multiple spaces
const words = cleanedText.split(/\s+/);

// Step 3: Count the frequency of each word using an object
const wordFreq = {};
words.forEach(word => {
    if (word !== '') { // Exclude empty strings resulting from multiple spaces
        if (wordFreq[word]) {
            wordFreq[word]++;
        } else {
            wordFreq[word] = 1;
        }
    }
});

// Step 4: Determine the most frequent word
let mostFrequentWord = '';
let maxFrequency = 0;

for (let word in wordFreq) {
    if (wordFreq[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFreq[word];
    }
}

// Print the results
console.log('Cleaned Text:', cleanedText);
console.log('Most frequent word:', mostFrequentWord, '(appears', maxFrequency, 'times)');

//4.
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extracting numbers using regular expression and match()
const numbers = text.match(/\d+/g);

// Parsing extracted numbers as integers and calculating total annual income
let totalIncome = 0;
if (numbers) {
    numbers.forEach(num => {
        totalIncome += parseInt(num, 10);
    });
}

// Calculating annual income assuming salary and online courses are monthly incomes
totalIncome += (parseInt(numbers[0], 10) * 12); // Adding salary for 12 months
totalIncome += parseInt(numbers[1], 10); // Adding annual bonus
totalIncome += (parseInt(numbers[2], 10) * 12); // Adding online courses for 12 months

// Output the total annual income
console.log('Total annual income:', totalIncome, 'euro');

