//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var userChoice = confirm("Would you like to join our mailing list?");


if (userChoice === true) {
    var userMail = prompt("Please enter your email address:", "me@example.com")

        if (userMail === null || userMail === "" || userMail === "me@example.com") {
        alert("Thank you, but your email was not valid.")}
        else {
            alert("Thank you, our next newsletter will be sent to " + userMail);
        }
        
 }
else {
    alert("Thank you, we will not bother you again.");
}


//==== LOGIC =============



