// Runs the pageReady function when the page loads
window.onload = pageReady;

function pageReady() {
  // Grabs form and elements by their IDs to be used later in the script
  var formHandler = document.forms.ixdForm;
  var headerTag = document.getElementById("welcome");
  var result = document.getElementById("result");

  // Grabs placeholders where form input values will be displayed
  var firstNamePlaceHolder = document.getElementById("result__Fname");
  var lastNamePlaceHolder = document.getElementById("result__Lname");
  var idPlaceHolder = document.getElementById("result__id");
  var programPlaceHolder = document.getElementById("result__program");
  var projectPlaceHolder = document.getElementById("result__project");

  // Function that processes the form input values and validates them
  function formProcessor() {
    var firstName = formHandler.in_fName;
    var lastName = formHandler.in_lName;
    var humberId = formHandler.in_id;
    var programOptions =
      formHandler.in_program.options[formHandler.in_program.selectedIndex];
    var selectedProgram = programOptions.text;
    var programValue = programOptions.value;
    var selectedProject = document.querySelector(
      'input[name="f__project"]:checked'
    );
    // Regular expression to check if Humber ID matches the expected pattern
    var humberIdRegEx = /N\d{8}/i;

    // Validates first name input
    if (firstName.value === "") {
      firstName.style.backgroundColor = "red";  // Highlights in red if empty
      firstName.focus(); // Focuses on the input field
      return false; // Prevents form submission
    } else {
      // Displays the first name in the result section
      firstNamePlaceHolder.textContent = firstName.value;
    }

    // Validates last name input
    if (lastName.value === "") {
      lastName.style.backgroundColor = "red";
      lastName.focus();
      return false;
    } else {
      // Displays the last name in the result section
      lastNamePlaceHolder.textContent = lastName.value;
    }

    // Validates Humber ID input and checks its format with regular expression
    if (humberId.value === "") {
      humberId.style.backgroundColor = "red";
      humberId.focus();
      return false;
    } else if (!humberIdRegEx.test(humberId.value)) {
      // Alerts if the Humber ID format is invalid
      alert("Invalid Humber ID!")
      return false
    } else {
      // Displays the Humber ID in the result section
      idPlaceHolder.textContent = humberId.value;
    }

    // Validates program selection
    if (programValue === "X") {
      formHandler.in_program.style.backgroundColor = "red";
      formHandler.in_program.focus();
      return false;
    } else {
      // Displays the selected program in the result section
      programPlaceHolder.textContent = selectedProgram;
    }

     // Validates project selection ensuring one project is selected
    if (!selectedProject) {
      var pTag = document.getElementById("caption_project")
      pTag.style.backgroundColor = "red";
      return false;
    } else {
      // Displays the selected project in the result section
      projectPlaceHolder.textContent = selectedProject.value;
    }

    // Hides the form and header, shows the result section after validation
    formHandler.style.display = "none";
    headerTag.style.display = "none";
    result.style.display = "block";

    // Prevents form submission page from reloading
    return false;
  }

  // Attaches the formProcessor function to the form's onsubmit event
  formHandler.onsubmit = formProcessor;
}
