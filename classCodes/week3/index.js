var myName = "Abraham";

var myArray = [];
var myBooks = ["Joy of Cooking", "Joy of Coding", "Joy of Cat"];
var myNums = [10, 2, 40, 300];
var myStuff = ["Hot", 54, myName, true];

console.log(myStuff);
console.log(myStuff[1]);
console.log(myStuff[2]);

//ASSIGN BY INDEX
myArray[0] = "Pine";
myArray[1] = "Cedar";
myArray[2] = "Walnut";

var moreBooks = ["Treasure island", "King Lear", "Bazaar", "Deadwood"];

// CONCAT - JOINS ARRAYS
var allBooks = myBooks.concat(moreBooks); /* Joins two arrays together */

console.log(
  allBooks.join(", " /* joins and separates using the char in quote */)
);

var booksAlpha = allBooks.sort(); // sorts alphabetically (even numbers will sort alphabetically)
console.log(booksAlpha);

console.log(myNums.sort());

console.log(myStuff.sort());

var booksReversed = allBooks.reverse();
console.log(booksReversed);

/* LOOPS */

var animalArray = ["Monkey", "Cat", "Dog", "Horse", "Goat"];

for (var i = 0; i < 10; i = i + 1) {
  // code to run multiple timres
  console.log("i is now: " +  i);
}
// code won;t run till loop is finished

for (var i = 0; i<animalArray.length; i ++) {
  // code to run multiple timres
  console.log("Animal at index# is: " + animalArray[i]);
}
// code won;t run till loop is finished

;