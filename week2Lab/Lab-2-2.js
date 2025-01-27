//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		var correctUsername = "dart";
		var correctPassword = "vader";
		var usernameInput;
		var passwordInput;



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
usernameInput = prompt("Enter your username:");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Your username is: " + usernameInput);

//5. CREATE POPUP BOX FOR PASSWORD
passwordInput = prompt("Enter your password:");


//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Provided password: " + passwordInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

// if (usernameInput === correctUsername && passwordInput === correctPassword) {
// 	alert("Welcome back " + usernameInput);
//     console.log("Login successful");}

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE

// if (usernameInput === correctUsername && passwordInput === correctPassword) {
// 	alert("Welcome back " + usernameInput);
//     console.log("Login successful");}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE


if (usernameInput === correctUsername && passwordInput === correctPassword){
	alert("Welcome back " + usernameInput);
	console.log("Login successful");
} else {
	alert("Invalid username or password");
	console.log("Login failed");
}