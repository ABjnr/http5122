/* LAB 8-1 - FINAL COUNTDOWN!! */

//create page load listener
window.onload = pageReady;
//create page load function
function pageReady() {
  //create variables for required HTML elements
  const todayDate = document.getElementById("todayData");
  const finalDate = document.getElementById("finalData");
  const dueDateSpan = document.getElementById("dueData");
  const countMsg = document.getElementById("countMsg");
  //create variables for now date and due date
  const displayMyDate = new Date().toDateString();
  const displayDueDate = new Date("April 22, 2025 18:00:00").toDateString();
  const myDate = new Date();
  const dueDate = new Date("April 22, 2025 18:00:00");
  //OUTPUT NOW DATE & DUE DATE TO HTML PAGE
  todayDate.innerHTML = displayMyDate;
  finalDate.innerHTML = displayDueDate;
  //CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
  var todayInMill = myDate.getTime();
  var dueInMIll = dueDate.getTime();
  var timeDiff = dueInMIll - todayInMill;
  //CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
  var daysRemaining = Math.floor(timeDiff / 86400000);
  //LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
  if (timeDiff > 0) {
    dueDateSpan.innerHTML = daysRemaining;
  } else {
    countMsg.innerHTML = "The Deadline for the Final Assignment has passed!";
  }
}