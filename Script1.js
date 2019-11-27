// JavaScript source code



function fetchWeather(zip) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip},us&APPID=f9940e48694b3fdded1e8d7c56ca3c17`)
        .then(response => response.json())
        .then(data => {
            weatherParser(data)
        })
}

function weatherParser(data) {
    console.log(typeof(data))
    console.log(data.main)
    console.log(data.main.temp)

    temp = data.main.temp

    bindData(temp)
}


function bindData(temp) {
    
}


$(document).ready(function () {
    var viewModel = {
        temp: ko.observable() // Initially blank
    };

    viewModel.temp("Hello, world!"); // Text appears
    ko.applyBindings(viewModel);

    fetchWeather('06790')

    console.log(temp)
});


