const calc = document.querySelector(".calc");
console.log(calc);

calc.addEventListener("click", (num) => {
  console.log(typeof num);
  console.log(typeof num.value);
});
