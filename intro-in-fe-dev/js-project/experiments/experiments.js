/*Way of pulling components from the DOM*/
const arrayofDOMFucn = [
  document.getElementsByClassName("DOMfunc"),
  document.querySelector("p"), //By querySelector
  document.getElementById("p1"), //By getElementById
  document.getElementsByClassName("p2")[0], //getElementsByClassName
  document.getElementsByClassName("str-num-bool")[0],
  document.getElementsByClassName("if")[0],
  document.getElementsByClassName("loop")[0],
];
const montlyRent = 500;
const yearlyRent = montlyRent * 12;

//Results
arrayofDOMFucn[1].textContent = `BY QUERRY SELECTOR : document.querySelector() => ${yearlyRent}`; //6000
arrayofDOMFucn[2].textContent = `BY ID: document.getElementById() => ${yearlyRent}`; //6000
arrayofDOMFucn[3].textContent = `BY CLASS NAME: getElementsByClassName() => ${yearlyRent}`; //6000

/*numbers strings and booleans */
const myName = "Danyil Shkodiuk";
const doubleQuotes = "this is 'fine'";
const singleQuote = "i don't have a problem with 1 qoute";
const someNum = 12;
const TrueBoolean = true;

//Result
arrayofDOMFucn[4].innerHTML = `
  <p>
    simple string =>${myName}
  </p>
  <p>  
    Nesting different quoutes inside each other or it wont work => ${doubleQuotes}
  </p>
  <p>  
    Use \\ to escape single quotes or use double quotes instead => ${singleQuote}
  </p>

<h3 class="snb">Numbers/Integers</h3>
  <p>
  Some number =>  ${someNum}
  </p>

  <h3 class="snb">Boolean</h3>
  <p>Boolean with true value => ${TrueBoolean}</p>
`;

/*Control Flow: If statment */
const skyIsBlue = false;
if (skyIsBlue) {
  arrayofDOMFucn[5].innerHTML = `<p>Sky is Blue !</p>`;
} else {
  arrayofDOMFucn[5].innerHTML = `<p>Sky is ... not blue?</p>`;
}

const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
  arrayofDOMFucn[5].innerHTML = `<p>Cool, now I have a lot of nachos to myself.</p>`;
} else if (friendsAtYourParty <= 4) {
  arrayofDOMFucn[5].innerHTML = `<p>Perfect amount to play some Mario Kart.</p>`;
} else {
  arrayofDOMFucn[5].innerHTML = `<p>Wooooo turn on the dance music!</p>`;
}

/*Loops*/

let friends = 0; //variable created

friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
console.log("FRIENDS:" + friends);

//WHILE LOOP
friends = 0; //var reset

console.log(`BEFORE WHILE LOOP: ${friends}`);

while (friends < 10) {
  friends = friends + 1; //while this is TRUE - concatinate (++)
  console.log(friends);
}

console.log(`AFTER WHILE LOOP: ${friends}`);

//operations on variables

friends = 0; //var reset

friends = friends + 1; //default addition
friends += 1; //assigment addition operator
friends++; // adds 1 after var
++friends; //adds 1 before var
console.log(`after all additions result is: ${friends}`);

//FOR LOOP

friends = 0; //var reset

console.log(`BEFORE FOR LOOP: ${friends}`);

for (let i = 0; i < 10; i++) {
  friends++;
  console.log(friends);
}

console.log(`AFTER FOR LOOP: ${friends}`);
