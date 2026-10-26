/**
 Write a JavaScript program that creates a simple JavaScript program 
 that manipulates strings using various string methods.



Input:-
Str1 : Hello
Str2 : World


Expected Output:-
Concatenated String: HelloWorld
Index of 'World': 5
 */
function concatString(str1, str2) {
    let answer;
    
    let concat = str1.concat(str2);   // concatenate using concat() method
    answer = concat;
    
    return answer;
}

function indexOfWorld( str1, str2){
    let con = str1.concat(str2); // Concatenate strings
    let indexOfworld = con.indexOf("World"); // Find index
    return indexOfworld;
}