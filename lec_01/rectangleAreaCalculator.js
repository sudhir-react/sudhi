/**
 Write a program to calculate the area of the rectangle for the given dimension (len and wid). Store the area in the result variable.



Input:-
5, 5
Expected Output:-
25
 */

function main(length, width) {
    // Calculate the area of the rectangle
    let area = length * width;
    return area;
}

// Sample Input
let len = 5;
let wid = 5;

// Calculate the area
let result = main(len, wid);

// Output
console.log("Area:", result);