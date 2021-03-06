// JavaScript source code

$(document).ready(function () {

    ko.applyBindings(viewModel);
    fetchWeather('06790')
});
	
	
function isValidUsZip(zip) {
	return (Number.isInteger(parseInt(zip)));
}



function fetchWeather(zip) {
	if (isValidUsZip(zip) == true) {
	 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=imperial&APPID=f9940e48694b3fdded1e8d7c56ca3c17`)
        .then(response => response.json())
        .then(data => {            
            weatherParser(data)
        })
		}
	else {
		window.alert("Please Enter A Valid Zip Code");
	}
}

function weatherParser(data) {
    console.log(typeof(data))
    console.log(data)

    temp = data.main.temp.toString()
	city = data.name.toString()
	desc = data.weather[0].description.toString()
    viewModel.temp(temp);
	viewModel.city(city);
	viewModel.desc(desc);
	
}




var viewModel = {
    temp: ko.observable(),
	city: ko.observable(),
	desc: ko.observable()
};




