// Get the first paragraph by tag name
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent); // Output: This is the first paragraph.

// Get the second paragraph by ID
const secondParagraph = document.querySelector('#second-paragraph');
console.log(secondParagraph.textContent); // Output: This is the second paragraph.

// Get all paragraphs as a NodeList by tag name
const allParagraphs = document.querySelectorAll('p');

// Loop through the NodeList and get text content
for (const paragraph of allParagraphs) {
  console.log(paragraph.textContent);
}

// Set text content for the fourth paragraph
allParagraphs[3].textContent = 'Fourth Paragraph';

// Set ID and class attributes using different methods
firstParagraph.setAttribute('id', 'first-paragraph');
secondParagraph.classList.add('highlighted');
