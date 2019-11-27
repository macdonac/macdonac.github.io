// JavaScript source code

$(document).ready(function () {

    ko.applyBindings(viewModel);
    fetchWeather('06790')
});


function fetchWeather(zip) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip},us&APPID=f9940e48694b3fdded1e8d7c56ca3c17`)
        .then(response => response.json())
        .then(data => {            
            weatherParser(data)
        })
}

function weatherParser(data) {
    console.log(typeof(data))
    console.log(data)

    temp = data.main.temp.toString()
    viewModel.temp(temp);
}




var viewModel = {
    temp: ko.observable() // Initially blank
};




