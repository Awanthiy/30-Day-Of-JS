// Get all paragraphs as a NodeList
const allParagraphs = document.querySelectorAll('p');

// Loop through and style each paragraph
for (let i = 0; i < allParagraphs.length; i++) {
  const paragraph = allParagraphs[i];
  const color = (i % 2 === 0) ? 'green' : 'red'; // Alternate colors

  paragraph.style.color = color;
  paragraph.style.backgroundColor = '#eee'; // Light background
  paragraph.style.fontSize = '16px'; // Set font size
  paragraph.style.fontFamily = 'Arial, sans-serif'; // Set font family
}

// Set text content, ID, and class for specific paragraphs
allParagraphs[0].textContent = 'Paragraph One';
allParagraphs[0].id = 'paragraph-one';
allParagraphs[2].classList.add('important');
