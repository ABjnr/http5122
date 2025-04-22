// Calls the pageReady function once the page has fully loaded
window.onload = pageReady;

function pageReady() {
  // Get references to the buttons and the output elements from the HTML
  var torontoButton = document.getElementById("Toronto");
  var nigeriaButton = document.getElementById("Yourtown");
  var locationOutput = document.getElementById("location");
  var iconOutput = document.getElementById("icon");
  var errorOutput = document.getElementById("error");
  var tempOutput = document.getElementById("temperature");
  var conditionOutput = document.getElementById("conditions");
  var windOutput = document.getElementById("wind");
  var outputSection = document.getElementById("output");

  // Function to get weather data for a given city
  function getWeather(city) {
    var cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb4bd888bd08f00bbb367d163f2b86b8&units=metric`;

    // Construct the URL for the OpenWeatherMap API with the given city and API key
    var xhr = new XMLHttpRequest();
    xhr.open("GET", cityUrl, true);
    xhr.responseType = "json";
    xhr.send(null);

    // Create a new XMLHttpRequest to fetch weather data from the API
    xhr.onreadystatechange = function () {
      // Function that is triggered when the request state changes
      if (xhr.readyState === 4) {
        outputSection.style.display = "block";

        // Checks if the request was successful (status code 200)
        if (xhr.status === 200) {
          var resData = xhr.response;

          // Get the description and icon of the weather from the response data
          var iconAlt = resData.weather[0].description;
          var iconImgSrc = `https://openweathermap.org/img/wn/${resData.weather[0].icon}.png`;

          // Update the HTML elements with the weather data
          locationOutput.innerHTML = resData.name;
          conditionOutput.innerHTML = resData.weather[0].description;

          iconOutput.innerHTML = `<img src="${iconImgSrc}" alt="${iconAlt}"></img>`;
          tempOutput.innerHTML = `${Math.round(resData.main.temp)}&deg;C`;
          windOutput.innerHTML = `${Math.round(resData.wind.speed)}m/s`;

          //   console.log(resData);
        } else {
          // Display an error message if the request was not successful
          errorOutput.innerHTML = "Error retrieving weathe data";
          console.log(xhr.status);
          console.log(xhr.response.message);
        }
        // var errorMessage = xhr.response.message;
      }
    };
  }

  // Set the event listeners for the buttons to trigger the getWeather function when clicked
  torontoButton.onclick = function () {
    getWeather("o");
  };
  nigeriaButton.onclick = function () {
    getWeather("nigeria");
  };
}
