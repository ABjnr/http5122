// Create variables to hold each movie position
var movie1 = "Lion King";
var movie2 = "Better Man";
var movie3 = "A Real Pain";
var movie4 = "Wicked";
var movie5 = "Sonic The Hedgehog";
var movie6 = "Den of Thieves";
var movie7 = "Ad Vitam";

// Create a variable to store the user's input that has been converted to an integer
var parsedSelectedMovie;

// Create an array of available options the user can select
var availableOptions = [1, 2, 3, 4, 5, 6, 7];
// Create an array to hold each movie variable according to their position
var topSevenMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// A while loop stating that if the converted user's input does not include the array of an available options we throw repeat whetever is in the block till the condition is met
while (!availableOptions.includes(parsedSelectedMovie)) {
  // create a variable to store the user's input
  var selectedMovie = prompt(
    "Which top 7 movie would you like?",
    "Pick a number: 1-7"
  );

  // conver the user's input to integer
  parsedSelectedMovie = parseInt(selectedMovie);

  // if the user's input is null or does not include the available options we throw a pop up message
  if (
    selectedMovie === null ||
    !availableOptions.includes(parsedSelectedMovie)
  ) {
    alert("Please enter a number between 1 and 7!");
  }
}

// once the condition in the while loop turns true we run the next lines of code
if (availableOptions.includes(parsedSelectedMovie)) {
  // if the user's input is valid we return the movie name and position on our list
  alert(
    `Number ${parsedSelectedMovie} on the list is: ${
      topSevenMovies[parsedSelectedMovie - 1]
    }`
  );

  // looping through our array and returning all the movies and their position in our array to the console
  for (let i = 0; i < topSevenMovies.length; i++) {
    console.log(`Number ${i + 1} on the list is: ${topSevenMovies[i]}`);
  }
}
