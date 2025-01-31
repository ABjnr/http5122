// Declare a variable to store the user's team
var userTeam = prompt("Enter your team number between 1 to 6:");
// Parsing the user input, converting it to a number and storing it in a variable
var teamNumber = parseInt(userTeam);
// Declaring a variable to store the correct team number
var correctTeamNumber = 3;

// Creating the logic to validate the user's team
if (teamNumber !== null && teamNumber === correctTeamNumber) {
  // If the input field is not null and the user input matches the correct team number, ask for the user's first name
  var username = prompt("Please input first name: ");
  // convert the first letter of the user's input to capital letter and store in a variable
  var capUsername =
    username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  console.log(capUsername);

  // validating the username input to make sure user didn't leave an empty field or null value
  if (username !== null || username === "") {
    // Validating to see if the name the user gave matches the names in our existing list, if it does we return a popup with their full name
    switch (capUsername) {
      case "Emmanuel":
        alert("Welcome, Emmanuel Adebayo!");
        break;

      case "Samson":
        alert("Welcome, Samson Odulate!");
        break;

      case "Jerry":
        alert("Welcome, Jerry Mulero!");
        break;

      case "Sandra":
        alert("Welcome, Sandra Olutemi!");
        break;

      // if the name does not exist in our existing list we deny the user access
      default:
        alert("Access Denied, you do not belong to this group!");
        break;
    }
  } else {
    // if the user entered a null or empty value, throw a popup text saying "Invalid input"
    alert("Invalid input!");
  }
} else {
  // if the user inputs a null value or a team number that does't match the correct team number we throw an "Access denied" popup text
  alert("Access Denied!");
}


/* 

PROFESSIONAL PRACTICE SELF-REFLECTION QUESTIONS

1. How long did you think it would take you to complete this assignment?
    "Based on the little experience i had prior to humber college, i thought it would take me at lean an hour."

2. How long did it take you to complete this assignment?
    "It took me about 3 hours."

3. What, if any, challenges did you encounter during the process?
    "I nested my if statement in a faulty condition and kept wondering why i wasn't getting my desired result."

4. How much planning/problem solving work did you do before starting to code?
    "I went straight into coding and did my problem solving whilst coding."

5. What other resources (besides class notes) did you use for assistance during this assignment?
    "I went back to the files i created while learning javascript for the first time some years back."

*/


/* 

if(inputTeam === ourteam){
prompt first name
switch case
} else{
 
not on our team}

*/