let display = document.querySelector('.display');
let currentNumber = '0';
let firstOperand = null;
let operator = null;
let newNumber = true;

function updateDisplay() {
    display.textContent = currentNumber;
}

function clearDisplay() {
    currentNumber = '0';
    firstOperand = null;
    operator = null;
    newNumber = true;
    updateDisplay();
}

function appendNumber(num) {
    if (newNumber) {
        currentNumber = num;
        newNumber = false;
    } else {
        currentNumber = currentNumber === '0' ? num : currentNumber + num;
    }
    updateDisplay();
}

function operation(op) {
    const input = parseFloat(currentNumber);
    if (firstOperand === null) {
        firstOperand = input;
    } else if (operator) {
        const result = calculateResult(firstOperand, input, operator);
        currentNumber = String(result);
        firstOperand = result;
        updateDisplay();
    }
    operator = op;
    newNumber = true;
}

function calculate() {
    if (operator && firstOperand !== null) {
        const input = parseFloat(currentNumber);
        currentNumber = String(calculateResult(firstOperand, input, operator));
        firstOperand = null;
        operator = null;
        newNumber = true;
        updateDisplay();
    }
}

function calculateResult(a, b, op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return b;
    }
}

function toggleSign() {
    currentNumber = String(-parseFloat(currentNumber));
    updateDisplay();
}

function percentage() {
    currentNumber = String(parseFloat(currentNumber) / 100);
    updateDisplay();
}

// Initialize calculator
clearDisplay();
