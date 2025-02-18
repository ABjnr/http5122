// Define an object representing a footballer with properties and a method
let footballer = {
  name: "Cristiano Ronaldo",
  age: 40,
  height: 187,
  rating: 86,

  // Method to update the age of the footballer
  updateAge: function (newAge) {
    footballer.age = newAge;
    alert(`Updated Age: ${footballer.age}`);
  },
};

// Log the initial object to the console
console.log(`Deafault Object: `, footballer);

function updateHeight() {
  // Prompt the user to enter a new height while giving the current height as value
  var newHeight = prompt("Enter new height", footballer.height);
  // Update the height property
  footballer.height = newHeight;
}
// call the update height function
updateHeight();

function updateRating() {
  // Prompt the user to enter a new rating while giving the current rating as value
  var newRating = prompt("Enter new rating", footballer.rating);
  // Update the rating property
  footballer.rating = newRating;
}
// call the update rating function
updateRating();

// Update the age using the object's method
footballer.updateAge(41);

// Log the updated object state
console.log(`Updated Object: `, footballer);
