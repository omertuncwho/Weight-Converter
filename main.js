const weightInput = document.getElementById('weightInput');
const resultDiv = document.getElementById('result');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');

convertButton.addEventListener('click', convertWeight);
clearButton.addEventListener('click', clearInput);

weightInput.addEventListener('input', function() {
  const weightInPounds = parseFloat(this.value);

  if (weightInPounds < 0 || isNaN(weightInPounds)) {
    displayError("Please enter a valid number.");
  } else {
    const weightInKilograms = convertToKilograms(weightInPounds);
    displayResult(weightInKilograms);
  }
});

function convertWeight() {
  const weightInPounds = parseFloat(weightInput.value);

  if (weightInPounds < 0 || isNaN(weightInPounds)) {
    displayError("Please enter a valid number.");
  } else {
    const weightInKilograms = convertToKilograms(weightInPounds);
    displayResult(weightInKilograms);
  }
}

function clearInput() {
  weightInput.value = '';
  resultDiv.textContent = '';
}

function convertToKilograms(pounds) {
  return pounds * 0.453592;
}

function displayResult(kilograms) {
  resultDiv.textContent = `${kilograms.toFixed(2)} kilograms`;

  setTimeout(() => {
    resultDiv.textContent = '';
    weightInput.value = '';
  }, 10000);
}

function displayError(message) {
  resultDiv.textContent = message;

  setTimeout(() => {
    resultDiv.textContent = '';
  }, 2000);
}
