// Create HTML elements
document.body.innerHTML = `
    <h1>Calculate Object Weight in a Planet</h1>

    <!-- INPUT BLOCK -->
    <div class="input-block-container">
      <!-- Input Mass -->
      <input type="text" id="mass" name="mass" class="input-items" placeholder="Enter a number (kg)" required>
      
      <!-- Select Planet -->
      <select name="planets" id="select-planets" class="input-items">
        <option value="none">Select a planet</option>
        <option value="mercury">Mercury</option>
        <option value="venus">Venus</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
        <option value="saturn">Saturn</option>
        <option value="uranus">Uranus</option>
        <option value="neptune">Neptune</option>
        <option value="moon">Moon</option>
      </select>

      <!-- Button to Calculate -->
      <button name="button" class="input-items" id="btn-calculate">Calculate</button>

    </div>
    <!-- END OF INPUT BLOCK -->
    
    <!-- RESULT BLOCK -->
    <div class="result-block-container">
      <img id="planet-img" src="" class="result-items"/>
      <div class="result-items" id="result-text">
        <div id="show-input"></div>
        <div id="result-weight"></div>
      </div>
    </div>
    <!-- END OF RESULT BLOCK -->`;

// Get html elements
const mass = document.querySelector('#mass');
const selectPlanets = document.querySelector('#select-planets');
const button = document.querySelector('button');

// Create literal object containing gravity constant of each planet
const gravity = {
  mercury: 3.6,
  venus: 8.9,
  earth: 9.8,
  mars: 3.8,
  jupiter: 26,
  saturn: 11.1,
  uranus: 10.7,
  neptune: 14.1,
  moon: 1.6,
};

// Action when button is clicked
button.addEventListener('click', function () {
  // If mass is not empty str and a planet is selected
  if (mass.value !== '' && selectPlanets.value !== 'none') {
    // Show image of the chosen planet
    document.querySelector('img').src = `../assets/${selectPlanets.value}.png`;
    document.querySelector(
      'img'
    ).alt = `Image of planet ${selectPlanets.value}.`;

    // Show the info that is given by user
    document.querySelector('#show-input').innerText = `Weight of a ${
      mass.value
    } kg object in ${selectPlanets.value.toUpperCase()} is`;

    // Show the result
    document.querySelector('#result-weight').innerText = `${parseFloat(
      mass.value * gravity[selectPlanets.value]
    ).toFixed(2)} N`;
  } else {
    document.querySelector('#show-input').innerText = '';
    document.querySelector('img').src = '';
    document.querySelector('img').alt = '';
    document.querySelector('#result-weight').innerText =
      'Mass and Planet are required. Check your input!';
  }
});

/**
 * Style function is used to style an element property
 * @param {string} elementIdentifier - Element name or id.
 * @param {string} property - Property of an element.
 * @param {string} value - Value of the given property.
 */
function styleElement(elementIdentifier, property, value) {
  document.querySelector(elementIdentifier).style[property] = value;
}

/**
 * Used to style tags.
 * @param {string} elementIdentifier - Tag name or class name.
 * @param {string} property - Property of the element.
 * @param {string} value - Value of the element property.
 */
function styleElements(elementIdentifier, property, value) {
  const elements = document.querySelectorAll(elementIdentifier);
  elements.forEach(element => {
    element.style[property] = value;
  });
}

// Style body
styleElement('body', 'background-color', '#CAF0F8');

// Style the heading
styleElement('h1', 'text-align', 'center');
styleElement('h1', 'font-size', '1.5rem');

// Style input-items class
styleElements('.input-items', 'border-radius', '90px');
styleElements('.input-items', 'border', '.01rem solid #002021');
styleElements('.input-items', 'padding', '.8rem 3rem');
styleElements('.input-items', 'text-align', 'center');

// Style the button
styleElement('#btn-calculate', 'border', 'none');
styleElement('#btn-calculate', 'background-color', '#002021');
styleElement('#btn-calculate', 'color', '#a8eff0');
styleElement('#btn-calculate', 'align-self', 'flex-end');

// Style input-container class
styleElement('.input-block-container', 'background-color', '#ADE8F4');
styleElement('.input-block-container', 'padding', '1.5rem');
styleElement('.input-block-container', 'border-radius', '10px');
styleElement('.input-block-container', 'margin', '1rem .6rem');
styleElement('.input-block-container', 'display', 'flex');
styleElement('.input-block-container', 'gap', '20px');
styleElement('.input-block-container', 'justify-content', 'center');

// Style result-container
styleElement('.result-block-container', 'background-color', '#ADE8F4');
styleElement('.result-block-container', 'border-radius', '10px');
styleElement('.result-block-container', 'padding', '1.5rem');
styleElement('.result-block-container', 'display', 'flex');
styleElement('.result-block-container', 'justify-content', 'center');
styleElement('.result-block-container', 'align-items', 'center');
styleElement('.result-block-container', 'gap', '1.6rem');
styleElement('#planet-img', 'width', '30vw');

// TABLET VIEWPORT
const mediumView = window.matchMedia(
  '(min-width: 540px) and (max-width: 768px)'
);
function handleTabletChange(viewport) {
  if (viewport.matches) {
    styleElement('.input-block-container', 'display', 'flex');
    styleElement('.input-block-container', 'flex-direction', 'row');
    styleElements('.input-block-container', 'gap', '20px');
  }
}

mediumView.addEventListener('change', handleTabletChange);
handleTabletChange(mediumView);

// MOBILE PHONE VIEWPORT
const smallView = window.matchMedia('(max-width: 500px)');

function handleMobileChange(viewport) {
  if (viewport.matches) {
    // Set font size in mobile phone only
    styleElements('*', 'font-size', '1rem');

    // STYLE INPUT BLOCK
    styleElement('.input-block-container', 'display', 'flex');
    styleElement('.input-block-container', 'flex-direction', 'column');
    styleElement('.input-block-container', 'gap', '20px');
    styleElements('.input-items', 'padding', '.8rem 0rem');
    styleElements('.input-items', 'text-align', 'center');

    // STYLE RESULT BLOCK
    styleElement('.result-block-container', 'display', 'flex');
    styleElement('.result-block-container', 'flex-direction', 'column');
    styleElement('.result-block-container', 'align-items', 'center');
    styleElement('.result-block-container', 'gap', '20px');
    styleElement('#planet-img', 'width', '60vw');
  }
}

smallView.addEventListener('change', handleMobileChange);
handleMobileChange(smallView);
