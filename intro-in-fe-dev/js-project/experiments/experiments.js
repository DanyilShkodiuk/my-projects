/*Way of pulling components from the DOM*/
const arrayofDOMFucn = [
  document.querySelector("p"), //By querySelector
  document.getElementById("p1"), //By getElementById
  document.getElementsByClassName("p2")[0], //getElementsByClassName
];

const montlyRent = 500;
const yearlyRent = montlyRent * 12;
//Results
arrayofDOMFucn[0].textContent = `BY QUERRY SELECTOR : document.querySelector() => ${yearlyRent}`; //6000
arrayofDOMFucn[1].textContent = `BY ID: document.getElementById() => ${yearlyRent}`; //6000
arrayofDOMFucn[2].textContent = `BY CLASS NAME: getElementsByClassName() => ${yearlyRent}`; //6000
