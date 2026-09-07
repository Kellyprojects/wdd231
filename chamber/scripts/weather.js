// scripts/weather.js
const weatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('weather-forecast');
    const apiKey = 'ce214f729a70551b8c4ef268a2517a52';
    const city = 'Lagos'; // Change this to desired location
    const units = 'metric'; // Use 'imperial' for Fahrenheit

    // Function to fetch current weather
    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) throw new Error('Weather data not available');
            
            const data = await response.json();
            weatherSection.innerHTML = `<p><strong>${Math.round(data.main.temp)}°C</strong></p><p>${data.weather[0].description}</p>`;
        } catch (error) {
            weatherSection.innerHTML = '<p>Weather data is temporarily unavailable.</p>';
        }
    }

    // Function to fetch 3-day weather forecast
    async function fetchForecast() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) throw new Error('Forecast data not available');
            
            const data = await response.json();
            let forecastHTML = '<h4>Three-day forecast</h4><ul class="forecast-list">';
            for (let i = 0; i < 3; i += 1) {
                const forecast = data.list[i * 8];
                forecastHTML += `
                    <li>
                        <strong>${new Date(forecast.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' })}</strong>
                        <span>${Math.round(forecast.main.temp)}°C</span>
                    </li>
                `;
            }
            forecastHTML += '</ul>';
            forecastSection.innerHTML = forecastHTML;
        } catch (error) {
            forecastSection.innerHTML = '<p>Forecast data is temporarily unavailable.</p>';
        }
    }

    // Call the functions
fetchWeather();
fetchForecast();


