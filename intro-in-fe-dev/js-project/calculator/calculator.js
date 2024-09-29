const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
let firstNumber = null;
let secondNumber = null;
let operation = null;

calc.addEventListener("click", (event) => {
  number = event.target.innerText;
  classList = event.target.classList;

  const renderNumsOnScreen = () => {
    if (screen.innerText === "0" && classList.contains("number")) {
      screen.innerText = number;
    } else if (classList.contains("number")) {
      screen.innerText += number;
    }
  };
  const reset = () => {
    const resetCals = classList.contains("double");
    if (resetCals) {
      screen.innerText = "0";
    }
  };

  const division = () => {
    if (classList.contains("divide")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "divide";
      screen.innerText = "";
    }
    if (classList.contains("equal")) {
      secondNumber = parseFloat(screen.innerText);
      if (operation === "divide") {
        if (secondNumber === "0") {
          screen.innerText = "Error";
        } else {
          screen.innerText = firstNumber / secondNumber;
        }
        firstNumber = null;
        secondNumber = null;
        operation = null;
      }
    }
  };

  const multiplication = () => {
    if (classList.contains("multiplication")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "multiplication";
      screen.innerText = "";
    }
    if (classList.contains("equal")) {
      secondNumber = parseFloat(screen.innerText);
      if (operation === "multiplication") {
        if (secondNumber === "0") {
          screen.innerText = "0";
        } else {
          screen.innerText = firstNumber * secondNumber;
        }
        firstNumber = null;
        secondNumber = null;
        operation = null;
      }
    }
  };

  const minus = () => {
    if (classList.contains("minus")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "minus";
      screen.innerText = "";
    }
    if (classList.contains("equal")) {
      secondNumber = parseFloat(screen.innerText);
      if (operation === "minus") {
        screen.innerText = firstNumber - secondNumber;
      }
      firstNumber = null;
      secondNumber = null;
      operation = null;
    }
  };

  const plus = () => {
    if (classList.contains("plus")) {
      firstNumber = parseFloat(screen.innerText);
      operation = "plus";
      screen.innerText = "";
    }
    if (classList.contains("equal")) {
      secondNumber = parseFloat(screen.innerText);
      if (operation === "plus") {
        screen.innerText = firstNumber + secondNumber;
      }
      firstNumber = null;
      secondNumber = null;
      operation = null;
    }
  };
  renderNumsOnScreen();
  reset();
  division();
  multiplication();
  minus();
  plus();
});
