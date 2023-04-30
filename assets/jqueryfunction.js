$("document").ready(function() {
    $("body").append("<div class='card col-lg-12'></div>");
    $(".card").append("<nav class='navig blue'></nav>");
    $(".navig").append("<div class='nav-wrap'></div>");
    $(".card").append("<div class='currentDay'>'<div class='search'></div></div>");
    $(".nav-wrap").append("<div><input type='text' class='searchBar' id='info' ></input></div>")
    $(".nav-wrap").append("<button class='btn' ><i class='material-icons left'>search</i>Get Weather!</button>");
    $(".card").append("<div class='weather'></div>");
    $(".card").append("<h3 class='city'>Current Weather</h3>");
    $(".card").append("<h3 class='temperature'>Temperature</h3>");
    $(".card").append("<img src='' alt='' class='icon' />");
    $(".card").append("<div class='description'>Description:</div>");
    $(".card").append("<div class='humidity'>Humidity: </div>");
    $(".card").append("<div class='wind'>Wind Speed: </div>");
    $(".card").append("<div class='wrap row'></div>");
    $(".wrap").append("<div class='col-sm-3 blue day-1'><div class='dayDisplay'></div><img src='' alt='' class='icon' /><div class='tempDisplay'></div><div class='descDisplay'></div><div class='humidityDisplay'></div><div class='windDisplay'></div></div>");
    $(".wrap").append("<div class='col-sm-3 blue day-2'><div class='dayDisplay'></div><img src='' alt='' class='icon' /><div class='tempDisplay'></div><div class='descDisplay'></div><div class='humidityDisplay'></div><div class='windDisplay'></div></div>");
    $(".wrap").append("<div class='col-sm-3 blue day-3'><div class='dayDisplay'></div><img src='' alt='' class='icon' /><div class='tempDisplay'></div><div class='descDisplay'></div><div class='humidityDisplay'></div><div class='windDisplay'></div></div>");
    $(".wrap").append("<div class='col-sm-3 blue day-4'><div class='dayDisplay'></div><img src='' alt='' class='icon' /><div class='tempDisplay'></div><div class='descDisplay'></div><div class='humidityDisplay'></div><div class='windDisplay'></div></div>");
    $("body").css("background", "Url('./assets/Images/header_homepage2.JPG')");
    $(".card").append("<div class='box row'></div>");
    $(".box").append("<div class='col-md-6 box-1'></div>");
    $(".box").append("<div class='col-md-6 box-2'></div>");
    $(".box-1").append("<h4>Search History</h4><ul class='searchList'><li class='listCities'></li></ul>");
    $(".box-2").append("<button class='btn-flat waves-effect waves-light'>Clear</button>");
}); 