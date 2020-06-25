$(document).ready(function () {

  $("#search-button").on("click", function () {

  var apiKey = "7e9791df05c08ac90ec357d00e62c2f9";
  var city = $("#city-input").val();

    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=imperial";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      var testDate = new Date(1593021600*1000);
      console.log(testDate);

      var forecastDays = [];
      forecastDays.push(response.list[2]);
      forecastDays.push(response.list[10]);
      forecastDays.push(response.list[18]);
      forecastDays.push(response.list[26]);
      forecastDays.push(response.list[34]);

      //pull data needed to display in html div
      //loop through it
      for (var i = 0; i < forecastDays.length; i ++) { 
      var dataContainer = $("<div>").addClass("forecast-data-container");
      var cityNameEl = $("<div>").text(response.city.name);
      var dateEL = $("<div>").text(forecastDays[i].dt_txt);
      var iconID = forecastDays[i].weather[0].icon;
      var weatherIcon = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
      var iconEl = $("<div>").prepend("<img src='"+ weatherIcon + "' alt='Weather Icon' />")
      var tempEl = $("<div>").text("Temperature: " + forecastDays[i].main.temp + " °F");
      var humidityEl = $("<div>").text("Humidity: " + forecastDays[i].main.humidity);
      //var windspeedEL = $("<div>").text("Wind Speed: " + forecastDays[i].wind.speed + " mph");
      //create a var for UV index (will need long + lat). will prob need to create another URL query

      
      dataContainer.append(cityNameEl, dateEL, iconEl, tempEl, humidityEl);
      //append the data Container to the html
      $("#forecast-data-display").append(dataContainer);

    

      }
    });
  });
});
