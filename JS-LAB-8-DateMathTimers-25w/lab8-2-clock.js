/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = pageReady;
//create page load function
function pageReady() {
  //create variables for required HTML elements
  var hoursOut = document.getElementById("hoursOut");
  var minsOut = document.getElementById("minsOut");
  var secsOut = document.getElementById("secsOut");
  var btnStart = document.getElementById("btnStart");
  var btnStop = document.getElementById("btnStop");
  //create time variable so all functions have access to it
  var hours;
  var minutes;
  var seconds;
  var intervalTime;

  //CREATE FUNCTION THAT DISPLAYS THE TIME
  function displayTime() {
    var currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    hoursOut.textContent = formatTime(hours);
    minsOut.textContent = ":" + formatTime(minutes);
    secsOut.textContent = ":" + formatTime(seconds);
  }

  //CREATE FUNCTION TO START THE CLOCK.
  function startClock() {
    if (intervalTime == null) {
      displayTime();
      intervalTime = setInterval(displayTime, 1000);
    }
  }

  //CREATE FUNCTION TO STOP THE CLOCK
  function stopClock() {
    clearInterval(intervalTime);
    intervalTime = null;
  }

  function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

  // SET EVENT LISTENERS
  btnStart.addEventListener("click", startClock);
  btnStop.addEventListener("click", stopClock);
}
