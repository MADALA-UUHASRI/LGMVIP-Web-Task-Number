const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let currentOperator = '';
let firstOperand = null;

buttons.forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.textContent));
});

function handleButtonClick(value) {
  if (!isNaN(value) || value === '.') {
    currentInput += value;
    updateDisplay();
  } else if (value === 'C') {
    clear();
  } else if (value === '=') {
    calculate();
  } else {
    currentOperator = value;
    if (currentInput !== '') {
      firstOperand = parseFloat(currentInput);
      currentInput = '';
    }
  }
}

function updateDisplay() {
  resultInput.value = currentInput;
}

function clear() {
  currentInput = '';
  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}

function calculate() {
  if (firstOperand !== null && currentInput !== '') {
    const secondOperand = parseFloat(currentInput);
    let result;
    
    switch (currentOperator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
    }

    currentInput = result.toString();
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
  }
}
