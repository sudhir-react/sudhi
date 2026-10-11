const accountId = 12345;
let accountEmail ="Sudhir@google.com";
var accountPassword ="87689";
accountCity ="Bengaluru";
let accountState;

//accountId = 2; // not allowed
/*  
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail ="sss@hotmail.com"
accountPassword ="657834"
accountCity = "Ghazipur"

console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

