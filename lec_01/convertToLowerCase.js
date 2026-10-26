/**
  Write a program that converts every character of the user name
   as lowercase and combines the first name and last name of the user.

You have given the first name and last name of the user as the input.
The names of the users should be stored in lowercase only and the output
 should be a combination of both First name and Last name.
*/

let firstName = "SUDHIR";
let lastName = " KUMAR";

let str1 = firstName.toLowerCase();
let str2 = lastName.toLowerCase();

let  str =str1.concat(str2);
console.log(str);


function lowerCaseString(str1,str2){
    let lowercase = str1.toLowerCase()+str2.toLowerCase();

    return lowercase;
}

