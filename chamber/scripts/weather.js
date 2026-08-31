// scripts/weather.js
document.addEventListener('DOMContentLoaded', () => {
    const weatherSection = document.getElementById('weather');
    const forecastSection = document.getElementById('weather-forecast');
    
    // Replace 'the_API_KEY' with actual API key
    const apiKey = '019051a93d167cced4a106c06867004c';
    const city = 'Lagos'; // Change this to desired location
    const units = 'metric'; // Use 'imperial' for Fahrenheit

    // Function to fetch current weather
    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) throw new Error('Weather data not available');
            
            const data = await response.json();
            weatherSection.innerHTML = `
                <h2>Weather Information</h2>
                <p>Current Temperature in ${data.name}: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } catch (error) {
            weatherSection.innerHTML = `<p>Error loading weather: ${error.message}</p>`;
        }
    }

    // Function to fetch 3-day weather forecast
    async function fetchForecast() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) throw new Error('Forecast data not available');
            
            const data = await response.json();
            let forecastHTML = '<h2>5-Days Weather Forecast</h2><ul>';
            for (let i = 0; i < data.list.length; i += 8) { // 8 entries per day
                forecastHTML += `
                    <li>
                        Date: ${data.list[i].dt_txt}<br>
                        Temp: ${data.list[i].main.temp}°C<br>
                        Weather: ${data.list[i].weather[0].description}
                    </li>
                `;
            }
            forecastHTML += '</ul>';
            forecastSection.innerHTML = forecastHTML;
        } catch (error) {
            forecastSection.innerHTML = `<p>Error loading forecast: ${error.message}</p>`;
        }
    }

    // Call the functions
    fetchWeather();
    fetchForecast();
});

