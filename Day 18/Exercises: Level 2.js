const catNames = [];

const catListItems = document.querySelectorAll('li.cat-name'); // Assuming elements have class "cat-name"

for (const listItem of catListItems) {
  catNames.push(listItem.textContent.trim()); // Extract text content, removing leading/trailing whitespace
}

console.log(catNames); // Print the catNames array containing all cat names
