var apiKey = "7e9791df05c08ac90ec357d00e62c2f9";

$("#submit-city-btn").on("click", function() {
    //not sure if I need to prevent default yet...
    //event.preventDefault;
    var city = $(".city-input").val();
    var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&appid=" 
    + apiKey;
    alert("button has been clicked");

    $.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    var results = response.data;
    console.log(queryURL);
    console.log(response);

});


});