const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
let firstNumber = null;
let secondNumber = null;
let operation = null;

calc.addEventListener("click", (event) => {
  const number = event.target.innerText;
  const classList = event.target.classList;

  const renderNumsOnScreen = () => {
    if (screen.innerText === "0" && classList.contains("number")) {
      screen.innerText = number;
    } else if (classList.contains("number")) {
      screen.innerText += number;
    }
  };

  const handleOperation = () => {
    if (classList.contains("plus")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "plus";
      screen.innerText = "";
    } else if (classList.contains("minus")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "minus";
      screen.innerText = "";
    } else if (classList.contains("divide")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "divide";
      screen.innerText = "";
    } else if (classList.contains("multiplication")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "multiplication";
      screen.innerText = "";
    }
  };

  const calculateResult = () => {
    if (classList.contains("equal")) {
      secondNumber = parseFloat(screen.innerText);

      if (operation === "plus") {
        screen.innerText = firstNumber + secondNumber;
      } else if (operation === "minus") {
        screen.innerText = firstNumber - secondNumber;
      } else if (operation === "divide") {
        if (secondNumber === 0) {
          screen.innerText = "Error"; // Handle division by zero
        } else {
          screen.innerText = firstNumber / secondNumber;
        }
      } else if (operation === "multiplication") {
        screen.innerText = firstNumber * secondNumber;
      }

      // Reset after the calculation
      firstNumber = null;
      secondNumber = null;
      operation = null;
    }
  };

  const reset = () => {
    if (classList.contains("double")) {
      screen.innerText = "0"; // Reset the screen
      firstNumber = null;
      secondNumber = null;
      operation = null;
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
  calculateResult();
  remLastNum(); // Perform calculation when '=' is clicked
  reset(); // Handle reset (C button)
});
