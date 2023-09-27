function getWeather() {
    let city = document.getElementById('city').value;
    const apiKey = '44cbb74eff661d988301edf2934cce44'; // Get an API key from a weather service provider

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            })
            .catch(error => console.error('Error:', error));
    }
}
