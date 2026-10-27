/**
 * Develop a program to calculate the area of a triangle. The program takes the base and height of a triangle as input and calculates the area using the appropriate arithmetic operators for multiplication and division.



Input:-
Base of the triangle: 10
Height of Triangle: 20


Expected Output:-
Area of the triangle: 100


Test Cases:-
The final output should be printed correctly.

num1 and num2 are the base and height of the triangle respectively. Use the appropriate formula to evaluate the area of a triangle by using them and store it in the variable name 'answer'.
 */

function AreaOfTriangle(basee,heightt){
    let answer;
    answer = 0.5*(basee*heightt)

    return answer;}

const basee = 20;
const heightt = 10;
const area = AreaOfTriangle(basee, heightt);

console.log(`Area of triangle is: ${area}`);


function areaOfTriangle(base, height) {
  const b = parseFloat(base);
  const h = parseFloat(height);

  if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
    return "Invalid input: base and height must be positive numbers.";
  }

  return 0.5 * b * h;
}

// Example usage:
const base = 20;
const height = 10;
const area1 = areaOfTriangle(base, height);

console.log(`Area of triangle is: ${area1}`); // Output: Area of triangle is: 100