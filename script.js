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

      var forecastDays = [];
      forecastDays.push(response.list[2]);
      forecastDays.push(response.list[10]);
      forecastDays.push(response.list[18]);
      forecastDays.push(response.list[26]);
      forecastDays.push(response.list[34]);

      var lat = response.city.coord.lat;
      var long = response.city.coord.lon;
      var uvUrl =
        "http://api.openweathermap.org/data/2.5/uvi?appid=" +
        apiKey +
        "&lat=" +
        lat +
        "&lon=" +
        long;
      //create div in which uv index will be stored BEFORE the request for its data/value, so that the reponse has a home. otherwise, the browser will try to update the div before having the data.
      var uvEl = $("<div>");
      $.ajax({
        url: uvUrl,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        uvEl.text("UV Index: " + JSON.stringify(response.value));
      });

      var cityNameEl = $("<div>").text(response.city.name);
      var dateEL = $("<div>").text(forecastDays[0].dt_txt);
      var iconID = forecastDays[0].weather[0].icon;
      var weatherIcon =
        "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
      var iconEl = $("<div>").prepend(
        "<img src='" + weatherIcon + "' alt='Weather Icon' />"
      );
      var tempEl = $("<div>").text(
        "Temperature: " + forecastDays[0].main.temp + " °F"
      );
      var humidityEl = $("<div>").text(
        "Humidity: " + forecastDays[0].main.humidity
      );
      var windspeedEL = $("<div>").text(
        "Wind Speed: " + forecastDays[0].wind.speed + " mph"
      );
      var currentContainer = $("<div>").addClass("current-container");

      currentContainer.append(
        cityNameEl,
        dateEL,
        iconEl,
        tempEl,
        humidityEl,
        windspeedEL,
        uvEl
      );

      $("#current").empty();
      $("#current").append(currentContainer);

      $("#forecast-data-display").empty();
      for (var i = 0; i < forecastDays.length; i++) {
        var dataContainer = $("<div>").addClass("forecast-data-container");
        var cityNameEl = $("<div>").text(response.city.name);
        var dateEL = $("<div>").text(forecastDays[i].dt_txt);
        var iconID = forecastDays[i].weather[0].icon;
        var weatherIcon =
          "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
        var iconEl = $("<div>").prepend(
          "<img src='" + weatherIcon + "' alt='Weather Icon' />"
        );
        var tempEl = $("<div>").text(
          "Temperature: " + forecastDays[i].main.temp + " °F"
        );
        var humidityEl = $("<div>").text(
          "Humidity: " + forecastDays[i].main.humidity
        );

        dataContainer.append(cityNameEl, dateEL, iconEl, tempEl, humidityEl);
        $("#forecast-data-display").append(dataContainer);
      }
    });
  });
});
