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

/*Functions*/

function addTwo(number /*<-paramenter*/) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(`first result of addTwo function: ${finalAnswer}`);

const otherAnswer = addTwo(10);
console.log(
  `second result of addTwo function \nbut declared in other var: ${otherAnswer}`
);
//other function with more operators

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! 
  I’m extremely pleased you could join us, ${firstName}!\nI hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

//working with global var using params in func

const myHomeCity = "Brovary";
const myHomeState = "Kyiv";
const myHomeCountry = "Ukraine";

function logOutMyHome(city, state, country) {
  //add return to make it work
  return `You're from ${city}, ${state}, ${country}`;
  /*
  or declare it in console.log inside func
  console.log(`You're from ${city}, ${state}, ${country}`);
  */
}
console.log(logOutMyHome(myHomeCity, myHomeState, myHomeCountry));

//funcs declaretions

//1.default func
function bark() {
  console.log("woof!");
}
bark();

//2.declare func in var
const meow = function () {
  console.log("meow :3");
};
meow();

//3.arrow func =>
const chirp = () => {
  console.log("chipr!");
};
chirp();

/*Builtins */

const sentence = "ThIs HaS wEiRd CaSiNg On It";
const lowerCase = sentence.toLowerCase(); //toLowerCase()
const upperCase = sentence.toUpperCase(); //toUpperCase()
console.log(lowerCase + "\n" + upperCase);

let string = "Hi my name is Danyil";
string = string.substring(3 /*<-start*/, 5 /*<-end*/); //extract strng
console.log(string);

//int
let number = 5.3;
let roundedNumber = Math.round(number);
console.log(roundedNumber);
roundedNumber = Math.floor(number);
console.log(roundedNumber);
roundedNumber = Math.ceil(number);
console.log(roundedNumber);

const randomNum = Math.random();
console.log(randomNum);

// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
  "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));

/*Objects*/

//case 1
const person = {
  name: "Danyil Shkodiuk",
  city: "Poznan",
  state: "GP",
  favFood: "🍖",
  wantsSteakRightNow: true,
  numOfSteakWanted: 100,
};

console.log(person);
console.log(person.name);
console.log(person["name"]); //sama line as before, better use previous one
//case 2
const person1 = {
  name: "Angie",
  ageRange: "25-35",
};
const person2 = {
  name: "Francesca",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you will like Daft Punk.");
  } else if (person.ageRange === "65-75") {
    console.log("You are obviously going to like Johnny Cash.");
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}
suggestMusic(person1);
suggestMusic(person2);

//case 3
const dog = {
  name: "Luna",
  speak: () => {
    console.log("wof wof");
  },
};
dog.speak();

//nested objs

const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA",
  },
};

console.log(me.name.first);
console.log(me.location.state);
