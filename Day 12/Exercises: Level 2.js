function tenMostFrequentWords(paragraph, numWords = 10) {
    // Remove punctuation and convert the string to lowercase
    let words = paragraph.replace(/[^\w\s]/g, '').toLowerCase().split(/\s+/);
    
    // Create an object to store the frequency of each word
    let wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    
    // Convert the object to an array of {word, count} objects
    let wordArray = Object.keys(wordCounts).map(word => {
        return {word: word, count: wordCounts[word]};
    });
    
    // Sort the array by count in descending order
    wordArray.sort((a, b) => b.count - a.count);
    
    // Return the top `numWords` most frequent words
    return wordArray.slice(0, numWords);
}

// Example usage:
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));
