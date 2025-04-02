window.onload = pageReady;
 
function pageReady() {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=cb4bd888bd08f00bbb367d163f2b86b8&units=metric";

  var outLocation = document.getElementById("location");
  var outTemp = document.getElementById("temperature");
  var outCond = document.getElementById("conditions");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var DATA = xhr.response;
        console.log(DATA);

        var roundedTemp = Math.round(DATA.main.temp);
        outLocation.innerHTML = DATA.name;
        outTemp.innerHTML = `${roundedTemp}&deg;C`;
        outCond.innerHTML = `${
          DATA.weather[0].description[0].toUpperCase() +
          DATA.weather[0].description.slice(1)
        }.`;
      } else {
        outLocation.innerHTML = "API call was unsuccesful";
        console.log(xhr.status);
      }
    }
  };
}


