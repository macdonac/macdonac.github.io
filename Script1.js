// JavaScript source code
fetch('https://aapi.openweathermap.org/data/2.5/weather?q=London')
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})