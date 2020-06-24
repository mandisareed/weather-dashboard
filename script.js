$(document).ready(function () {
  console.log("ready!");

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

      var forecastDays = [];
      forecastDays.push(response.list[0]);
      forecastDays.push(response.list[8]);
      forecastDays.push(response.list[16]);
      forecastDays.push(response.list[24]);
      forecastDays.push(response.list[32]);

      //pull data needed to display in html div
      //loop through it
      for (var i = 0; i < forecastDays.length; i ++) { 

      var cityNameEl = $("<div>").text(response.city.name);
      var dateEL = $("<div>").text(response.list[0].dt_txt);
      var iconEl = $("<div>").text(response.list[0].weather.icon);
      var tempEl = $("<div>").text(response.list[0].main.temp);
      var humidityEl = $("<div>").text(response.list[0].main.humidity);
      var windspeedEL = $("<div>").text(response.list[0].wind.speed);
      //create a var for UV index (will need long + lat). will prob need to create another URL query

      //create a div to hold the data variables above
      var dataContainer = $("<div>").addClass("forecast-data1");
      dataContainer.append(cityNameEl, dateEL, iconEl, tempEl, humidityEl, windspeedEL);
      //append the data Container to the html
      $("#forecast-data-display").append(dataContainer);
    }
    });
  });
});
