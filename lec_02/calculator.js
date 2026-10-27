/**
 * Now build a calculator application, and we have to implement basic arithmetic operations. Write a JavaScript program that takes two numbers as input, performs addition, subtraction, multiplication, and division, and displays the results.



Input:-
num1:20 
num2: 10


Expected Output:-
Addition is: 30
Subtraction is: 10
Multiplication is: 200
Division is: 2
 */

function add(num1, num2) {
  let answer;
  answer = parseFloat(num1)+parseFloat(num2);
    return answer;
  }
  
  // Function to perform subtraction
  function subtract(num1, num2) {
    let answer;
  answer = num1-num2;
    return answer;
   
  }
  
  // Function to perform multiplication
  function multiply(num1, num2) {
    let answer;
    answer = num1*num2;
      return answer;
  }
  
  // Function to perform division
  function divide(num1, num2) {
    let answer;
  answer = num1/num2;
    return answer;
  }

 const num1 = 20;
 const num2 = 10;

 const additionResult = add(num1, num2);
 console.log(`Addition is: ${additionResult}`);