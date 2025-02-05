//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

var http5110 = 90;
var http5121 = 95;
var http5122 = 91;
var http5114 = 80;
var http5206 = 86;


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageOfFiveNumbers(num1, num2, num3, num4, num5){
    var average = (num1 + num2 + num3 + num4 + num5) / 5
    return(average.toFixed(1));
}



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
averageOfFiveNumbers(5, 10, 15, 20, 25);
var result = averageOfFiveNumbers(http5110, http5114, http5121, http5122, http5206);

if(result > 70){
    alert("Success")
} else {
    alert("Review Required")
}