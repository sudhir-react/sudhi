// Primitive

// 7 types: String, Number, Bullean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 110.03

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('234')
const anotherId = Symbol('234')
console.log(id === anotherId);


// const bigNumber = 577686688686549n


//Reference (Non primitive)

//Array, Objects, Functions


const heros =  ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Sudhir",
    age: 34,
}

const myFunction = function(){
    console.log("Hello JS!!");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);



// Stack (Primitive), Heap(Non-primitive)
let myChannelName = "Sudhir.com"
let  anotherName = myChannelName
anotherName = "koffi with sk"
console.log(myChannelName);
console.log(anotherName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sk@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
