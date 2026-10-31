/**Logical Operators (&&, ||, !) */
// AND (&&) both condition true then return true otherwise false
let grade = 65;
let scholarship = 80;
let eligible = (grade > 60)  && (scholarship > 70)
console.log(eligible);

// OR (||) all condition false then only return false otherwise true
let m1 = 55;
let m2 = 65;
let m3 = 45;
let eligibility = m1 > 60 || m2 > 60 || m3 > 70;
console.log(eligibility);

//Not(!) reverse operator

let rightToVote = true;
console.log(! rightToVote);


console.log(1 && 3);
console.log(3 && 1);


//undefined, null, NaN, 0, false, "" considered as falsy.
// 1-9, " ", true   considered truthy value

// && returnlast truthy & first falsy

console.log(3 && 1 && 4 && 7 && 8 && 6 && 5);
console.log(3 && 1 && 4 && 7 && 0 && 6 && 5 && null);

// || reurn last falsy & first Truthy
console.log(0 || null || undefined || false || NaN);
console.log(0 || null || undefined || 9 || NaN);
console.log(0 || "STRING" || undefined || 9 || NaN);

