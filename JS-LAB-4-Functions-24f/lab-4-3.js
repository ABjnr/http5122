//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG

//################## CREATE YOUR checkTemp FUNCTION
//This function will...
// check if the current temperature is suitable for walking a dog.

//It expects to receive...
//receive a number representing the current temperature.

//It will return...
// `false` if it's too hot (above 30°C), and `true` otherwise.

var weatherInput = Number(prompt("What is the current temperature?"));

function checkTemp(currentTemp) {
  var hotWeatherMessage = "Yikes! Too hot for dog walking!";
  var coldWeatherMessage = "Yikes! Too cold for dog walking!";

  if (currentTemp > 30) {
    alert(hotWeatherMessage);
    return false;
  } else {
    if (currentTemp < -10) {
      alert(coldWeatherMessage);
    } else {
      alert("You're good, have a nice walk!");
    }
    return true;
  }
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
checkTemp(weatherInput);
