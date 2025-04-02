//LAB 9-DATA STORAGE: INDEX PAGE

function makeCookie(cookieName, cookieValue, lifespan) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + lifespan * 1000); // lifespan in seconds
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = `${cookieName}=${cookieValue}; ${expires};`; // Set the cookie with expiration and path
}
//window.onload
window.onload = pageReady;

function getCookie(name) {
  // console.log("function getcookiie");
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function pageReady() {
  //check for stored values
  var userNameCookie = getCookie("userName");
  var userColorCookie = getCookie("userColor");

  //retrieve stored values

  if (userNameCookie && userColorCookie) {
    // Change welcome text to stored name
    document.getElementById(
      "newMsgBox"
    ).textContent = `Welcome, ${userNameCookie}!`;

    // Change BG color to stored color
    document.body.style.background = userColorCookie;
  }
}
//#####============== DO THIS PART FIRST! ===============
//get the form and set submit listener
var form = document.forms["infoForm"];

//onsubmit Function

form.onsubmit = function () {
  // Get values from form
  var userName = document.getElementById("inName").value.trim();
  var userColor = document.getElementById("inColor").value;

  // Log the form values
  console.log(`Name: ${userName}, Color: ${userColor}`);

  // Store values in cookies if userName is provided
  if (userName) {
    makeCookie("userName", userName, 86400);
    makeCookie("userColor", userColor, 86400);

    // Reload page to apply changes
    location.reload();
  }

  return false; // Prevent form submission
};

document.getElementById("btnDel").onclick = function () {
  makeCookie("userName", "", 0);
  makeCookie("userColor", "", 0);
  location.reload();
};
