const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
let firstNumber = null;
let secondNumber = null;
let operation = null;
let shouldResetScreen = false;

calc.addEventListener("click", (event) => {
  const number = event.target.innerText;
  const classList = event.target.classList;

  const renderNumsOnScreen = () => {
    if (shouldResetScreen) {
      screen.innerText = number;
      shouldResetScreen = false;
    } else if (screen.innerText === "0" && classList.contains("number")) {
      screen.innerText = number;
    } else if (classList.contains("number")) {
      screen.innerText += number;
    }
  };

  const calculate = () => {
    secondNumber = parseFloat(screen.innerText);
    if (operation === "plus") {
      firstNumber += secondNumber;
    } else if (operation === "minus") {
      firstNumber -= secondNumber;
    } else if (operation === "divide") {
      if (secondNumber === 0) {
        screen.innerText = "Error"; // Handle division by zero
        return;
      } else {
        firstNumber /= secondNumber;
      }
    } else if (operation === "multiplication") {
      firstNumber *= secondNumber;
    }
    screen.innerText = firstNumber;
    shouldResetScreen = true;
  };

  const handleOperation = () => {
    if (
      classList.contains("plus") ||
      classList.contains("minus") ||
      classList.contains("divide") ||
      classList.contains("multiplication")
    ) {
      if (firstNumber === null) {
        firstNumber = parseFloat(screen.innerText);
      } else if (operation) {
        calculate();
      }
      if (classList.contains("plus")) {
        operation = "plus";
      } else if (classList.contains("minus")) {
        operation = "minus";
      } else if (classList.contains("divide")) {
        operation = "divide";
      } else if (classList.contains("multiplication")) {
        operation = "multiplication";
      }
      shouldResetScreen = true;
    }
  };

  const calculateResult = () => {
    if (classList.contains("equal")) {
      calculate(); // Calculate final result
      operation = null;
      firstNumber = null; // Reset to allow new calculations
    }
  };

  const reset = () => {
    if (classList.contains("double")) {
      screen.innerText = "0"; // Reset the screen
      firstNumber = null;
      secondNumber = null;
      operation = null;
      shouldResetScreen = false;
    }
  };

  const remLastNum = () => {
    if (classList.contains("arrowLeft")) {
      if (screen.innerText.length === 1) {
        screen.innerText = "0";
      } else {
        screen.innerText = screen.innerText.substring(
          0,
          screen.innerText.length - 1
        );
      }
    }
  };

  renderNumsOnScreen(); // Render numbers on the screen
  handleOperation(); // Handle operations (+, -, *, ÷)
  calculateResult(); // Calculate result when '=' is clicked
  remLastNum(); // Handle backspace
  reset(); // Handle reset (C button)
});
