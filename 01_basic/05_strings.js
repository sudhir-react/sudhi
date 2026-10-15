const name = "Sudhir-km"
const repoCount = 50

//console.log(name + repoCount + " Value" );

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sudhir-km-Mishra')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName[8]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = " sudhir  "
console.log(newStringOne)
console.log(newStringOne.trim());  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://sudhir.com/sudhi%40km"
console.log(url.replace('%40', '_'))


console.log(url.includes('sudhir'));
console.log(url.includes('moon'));

console.log(gameName.split('-'))
