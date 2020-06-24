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
      //var forecastDays = [];
      console.log(response.list[0]);
      console.log(response.list[8]);
      console.log(response.list[16]);
      console.log(response.list[24]);
      console.log(response.list[32]);
    });
  });
});
