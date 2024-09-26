const calc = document.querySelector(".calc");
const screen = document.querySelector(".screen");
console.log(calc);

calc.addEventListener("click", (event) => {
  number = event.target.innerText;
  classList = event.target.classList;
  const renderNumsOnScreen = () => {
    if (screen.innerText === "0" && classList.contains("number")) {
      screen.innerText = number;
    } else if (classList.contains("number")) {
      screen.innerText += number;
    } else {
      alert("nothing :S");
    }
  };
  renderNumsOnScreen();
});
