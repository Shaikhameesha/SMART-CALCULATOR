// script.js

// Select display and buttons
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let resultDisplayed = false;

// Handle number input
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (resultDisplayed) {
      currentInput = "";
      resultDisplayed = false;
    }
    currentInput += button.innerText;
    display.innerText = currentInput;
  });
});

// Handle operator input
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const op = button.innerText;
    if (op === "^2") {
      currentInput += "**2"; // Square operation
    } else {
      currentInput += op;
    }
    display.innerText = currentInput;
  });
});

// Clear display
clearButton.addEventListener("click", () => {
  currentInput = "";
  display.innerText = "0";
});

// Evaluate expression
equalsButton.addEventListener("click", () => {
  try {
    const result = eval(currentInput); // Evaluate the expression
    display.innerText = result;
    currentInput = result.toString();
    resultDisplayed = true;
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
});
