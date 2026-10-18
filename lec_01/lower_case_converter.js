function lowerCaseString(firstName, lastName) {
    // Convert first name and last name to lowercase
    Name = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    // Combine the first name and last name
    let username = Name + lastName;

    return username;
}

// Input
let Name = "JOHN";
let lastName = "DOE";

// Generate username
let username = lowerCaseString(Name, lastName);

// Output
console.log("Username:", username);
