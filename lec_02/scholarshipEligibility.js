/**
 * Problem statement
Create a program to determine whether a student is eligible for an award or not. If they are eligible, store true in the answer; otherwise, store false.



To be eligible for the award, a student must meet one of the following criteria:

Scholarship Eligibility: A student scores above 80 in at least two out of three subjects.
Science Fair Participation: A student has a total score of at least 250 across all three subjects.
If a student meets either of the above criteria, they are eligible for the award.



CASE I:

Input:-
English: 77
Maths:   84
Science: 93


Expected Output:-
true


Explanation
The student is eligible for a scholarship (scores above 80 in Mathematics and Science).
The student is also eligible for the Science Fair (total score is 254).
As the student meets both criteria, they are eligible for the award.


CASE II:

Input:
English: 79
Mathematics: 75
Science: 98


Expected Output:
true



Explanation:
The student is not eligible for a scholarship (scores above 80 in only one subject).
The total score is 252, which is greater than 250, so the student is eligible for the Science Fair.
As the student meets one of the criteria, they are eligible for the award.
 */

function isEligible(mathScore , englishScore , scienceScore) {
    let eligibleForAward;
    let eligibleForScholarship = (mathScore > 80 && englishScore > 80) ||
                (mathScore > 80 && scienceScore > 80) ||
                (englishScore > 80 && scienceScore > 80);

// To qualify for a science fair, the student must have a total score of at least 250.
let qualifiesForScienceFair = (mathScore + englishScore + scienceScore) >= 250;

// The student is eligible for an award if they qualify for either a scholarship or a science fair.
 eligibleForAward = eligibleForScholarship || qualifiesForScienceFair;
return eligibleForAward
    
}