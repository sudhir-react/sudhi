/** Rules and Naming Convention */

const { cacheSignal } = require("react");

// 1. Case Sensitive
let year = 2020;
let Year = 2021;

// 2. Contains Alphabets(aA-zZ), Numbers(0-9), underScore(_), Dollor($)
let name  = "Sudhir";
let firstName = "Sudhir";
let amt$ =35.5;
let num1 = 20;

// 3. Cannot start with a Number
// let 1num = 10;

// 4. No Reserved Keywords
//let let =10;

// 5. No Blank Spaces in between
//let birth date = 21

// 6. underr 10 or 15 characters

// 7. Variable name should always exist on the left hand
let a = 10;
//let 10 = b;

/* Naming Convention */

//Relatable names for readability

//Snake Casing or camel Casing
let birthYear = 1997; //Camel Casing
let birth_year = 1998; //Snake casing 