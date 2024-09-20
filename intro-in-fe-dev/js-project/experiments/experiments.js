/*Way of pulling components from the DOM*/
const arrayofDOMFucn = [
  document.querySelector("p"), //By querySelector
  document.getElementById("p1"), //By getElementById
  document.getElementsByClassName("p2")[0], //getElementsByClassName
  document.querySelector("div"),
];
const targetDiv = arrayofDOMFucn[3];

const montlyRent = 500;
const yearlyRent = montlyRent * 12;
let br = document.createElement("br");
//Results
arrayofDOMFucn[0].textContent = `BY QUERRY SELECTOR : document.querySelector() => ${yearlyRent}`; //6000
arrayofDOMFucn[1].textContent = `BY ID: document.getElementById() => ${yearlyRent}`; //6000
arrayofDOMFucn[2].textContent = `BY CLASS NAME: getElementsByClassName() => ${yearlyRent}`; //6000

/*numbers strings and booleans */
const myName = "Danyil Shkodiuk";
const doubleQuotes = "this is 'fine'";
const singleQuote = "i don't have a problem with 1 qoute";
const someNum = 12;
const TrueBoolean = true;
const newHeading = document.createElement("h3");
newHeading.textContent = "New Heading Text";

//Result
arrayofDOMFucn[3].innerHTML = `
<h3 class="snb">Strings</h3>
  simple string => 
    ${myName} <br/> 
  Nesting different quoutes inside each other or it wont work => 
    ${doubleQuotes} <br/> 
  Use \\ to escape single quotes or use double quotes instead => 
    ${singleQuote} <br />
  <h3 class="snb">Numbers/Integers</h3>
  Some number =>  
    ${someNum} <br />
  <h3 class="snb">Boolean</h3>
  Boolean with true value =>
    ${TrueBoolean}
`;
const referenceElement = targetDiv.querySelectorAll(``)[0];
targetDiv.insertBefore(newHeading, referenceElement);
