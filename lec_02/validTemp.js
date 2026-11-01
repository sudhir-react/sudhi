/**
 * Problem statement
Create a function named temperatureInCelcius to analyze temperature data. The function should:

Take a temperature in Celsius as input.
Convert the temperature to Fahrenheit using the formula:
Fahrenheit = (Celsius×9/5)+32
Determine if the converted Fahrenheit value is greater than 86. If it is, return true; otherwise, return false.

Input:
Temperature(in celsius): 35
Output
true


Test Cases:-
The final output should be printed correctly.

Convert the input temperature from Celsius to Fahrenheit using the formula.
Check if the Fahrenheit value is greater than 86. The logic must use direct comparison (> 86) to determine if the temperature is "hot" without additional conditional statements like if or ternary operators.
Return true if it is "hot" (greater than 86); otherwise, return false.
 */

function temperatureInCelcius(temperatureInCelsius){
    let isHot
let celsius = parseFloat(temperatureInCelsius);

// Temperature conversion using operators
var fahrenheit = (celsius * 9/5) + 32;

// Determine hot/cold status without using if or ternary
isHot = fahrenheit > 86;
return isHot;
    }