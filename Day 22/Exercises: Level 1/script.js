const container = document.getElementById('number-container');

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

for (let i = 1; i <= 100; i++) {
  const numberBox = document.createElement('div');
  numberBox.classList.add('number-box');
  numberBox.textContent = i;

  if (i % 2 === 0) {
    numberBox.classList.add('even');
  } else {
    numberBox.classList.add('odd');
  }

  if (isPrime(i)) {
    numberBox.classList.add('prime');
  }

  container.appendChild(numberBox);
}
