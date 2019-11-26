// JavaScript source code
fetch('${https://api.openweathermap.org/data/2.5/weather?q=London}APIKEY=f9940e48694b3fdded1e8d7c56ca3c17')
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})