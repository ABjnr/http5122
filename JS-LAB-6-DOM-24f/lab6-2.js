//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT

//'WRAPPER' FUNCTION FOR DOM LOGIC

//GET DOM ELEMENTS WE'LL NEED

//====CREATE THE FUNCTIONS WE'LL NEED====
//FUNCTION TO ASK USER

//FUNCTION TO CHANGE buttonBox

//SETUP LISTENERS

//END onload FUNCTION

window.onload = pageReady;

function pageReady() {
  var mysteryBox = document.querySelector("#mysteryBox");
  var buttonBox = document.querySelector("#buttonBox");
  var buttonBoxText = document.querySelector("#buttonBoxText");

  mysteryBox.onmouseover = mouseOverMysteryBox;
  buttonBox.onclick = clickButtonBox;

  function mouseOverMysteryBox() {
    var userSelect = confirm("Do you want to see something nice?");
    if (userSelect === true) {
      mysteryBox.style.display = "none";
      buttonBox.style.display = "block";
    }
  }

  function clickButtonBox() {
    buttonBox.style.width = "600px";
    buttonBox.style.background = "orange";
    // buttonBoxText.innerHTML = "SURPRISE!!!";
	buttonBox.innerHTML="<h2>SURPRISE!!!</h2>"
  }
}
