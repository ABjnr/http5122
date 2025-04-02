//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = pageReady;

function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function pageReady() {
  // Check for stored values
  var userNameCookie = getCookie("userName");
  var userColorCookie = getCookie("userColor");

  // If cookies are found, update the page content
  if (userNameCookie && userColorCookie) {
    // Change welcome text to stored name
    document.getElementById(
      "newMsgBox"
    ).textContent = `Welcome, ${userNameCookie}!`;

    // Change background color to stored color
    document.body.style.background = userColorCookie;
  }
}
