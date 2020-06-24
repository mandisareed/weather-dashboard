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
      var cityName = response.city.name;
      console.log(cityName);

      var date = response.list[0].dt_txt;
      console.log(date);

      var icon = response.list[0].weather.icon;
      console.log(icon);

      var temp = response.list[0].main.temp;
      console.log(temp);

      var humidity = response.list[0].main.humidity;
      console.log(humidity);

      var windspeed = response.list[0].wind.speed;
      console.log(windspeed);

      //create a var for UV index (will need long + lat)

      
    });
  });
});
