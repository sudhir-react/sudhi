/**
 * Problem statement
Create a simple online shopping discount calculator. The program should take the input for the original price of a product and the discount percentage. It should then calculate and display the final discounted price.



Input:-
Original Value = "50.75"
Discount Percentage = "15.5"
Output:-
Discounted Price = 42.88
Test Cases:-
The final output should be printed correctly.

First, convert the string value of "originalValue" and "discountPercentage" into numeral values using parseFloat. Then apply the formula for calculating the discount amount. After calculating the discounted amount value, deduct this amount from "originalValue" numeral value. Store the final amount in the answer variable.
 */

function shoppingDiscountCalculator(originalValue,discountPercentage){
  let answer;
// Type conversion to numbers
let originalPriceNum = parseFloat(originalValue);
let discountPercentageNum = parseFloat(discountPercentage);

// Calculate the discounted price
let discountAmount = (originalPriceNum * discountPercentageNum) / 100;
answer = originalPriceNum - discountAmount;
return answer ;
}