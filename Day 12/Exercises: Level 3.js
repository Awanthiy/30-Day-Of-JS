function cleanTextAndFindMostFrequentWords(sentence, numWords = 3) {
    // Clean the text by removing all non-alphabetic characters (keeping spaces)
    let cleanedText = sentence.replace(/[^a-zA-Z\s]/g, '');

    // Split the cleaned text into words
    let words = cleanedText.split(/\s+/);
    
    // Create an object to store the frequency of each word
    let wordCounts = {};
    words.forEach(word => {
        if (word) { // Ignore empty strings
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
    });
    
    // Convert the object to an array of {word, count} objects
    let wordArray = Object.keys(wordCounts).map(word => {
        return {word: word, count: wordCounts[word]};
    });
    
    // Sort the array by count in descending order
    wordArray.sort((a, b) => b.count - a.count);
    
    // Return the top `numWords` most frequent words
    return {
        cleanedText: cleanedText,
        mostFrequentWords: wordArray.slice(0, numWords)
    };
}

// Example usage:
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
let result = cleanTextAndFindMostFrequentWords(sentence);

console.log('Cleaned Text:', result.cleanedText);
console.log('Most Frequent Words:', result.mostFrequentWords);
