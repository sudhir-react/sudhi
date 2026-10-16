const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumbaer = 37.7865
console.log(otherNumbaer.toPrecision(4));
console.log(otherNumbaer.toPrecision(3));
const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
// Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(5.6));
console.log(Math.round(5.1));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.9));
console.log(Math.min(6, 4, 7,8,11));
console.log(Math.max(6, 4, 7,8,11));

console.log(Math.random());
console.log(Math.random()* 10 +1);
console.log(Math.floor(Math.random()* 10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max- min + 1)) + min);

