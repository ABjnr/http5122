//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cart = [];
var freeShipping = 35;
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total <= freeShipping) {
  var itemCost = prompt("input the price of new item");

  var parsedItemCost = parseInt(itemCost);

  total = total + parsedItemCost;

  console.log(total + "total");

  cart.push(parsedItemCost);
  console.log("Item prices: " + cart.join("|"));
}
alert("Your shipping for this order will be free!");

//GET ITEM COST FROM USER

//CONVERT USER INPUT TO A NUMBER

//ADD ITEM COST TO RUNNING TOTAL VARIABLE

//PUSH ITEM COST TO CART ARRAY

//SEND POPUP MESSAGE TO USER

//SEND OUTPUT TO CONSOLE
