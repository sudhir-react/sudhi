/**
 Build a simple grade calculator for a teacher. The teacher inputs the scores of students, and the program calculates the average grade. However, the challenge is that the scores input are in strings, and you need to ensure proper type conversion and coercion.



Input:-
student1Score = "90"
student2Score = "96"
student3Score = "77"


Expected Output:-
The average score is = 87.67
 */

function calculateAverage(student1Score ,student2Score ,student3Score) {
    let averageScore;
    // Type coercion: Convert string scores to numbers
let numericStudent1Score = +student1Score;
let numericStudent2Score = +student2Score;
let numericStudent3Score = +student3Score;

// Arithmetic operation: Calculate the average score
averageScore = (numericStudent1Score + numericStudent2Score + numericStudent3Score) / 3;
return averageScore;
}