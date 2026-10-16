// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2026, 0, 16)
console.log(myCreateDate.toDateString());

let myCreateDate0 = new Date(2026, 0, 16, 7, 5)
console.log(myCreateDate0.toLocaleString());

let myCreateDate1 = new Date('2026-10-16')
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date('11-10-2026')
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);

// newDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone: ''
// })