const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");


// Search button click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    getWeather(city);
});


// Get weather
async function getWeather(city) {
    try {
        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);
        const geoData = await geoResponse.json();
        if (!geoData.results) {
            alert("City not found");
            return;
        }
        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        const current = weatherData.current;
        cityName.innerText = location.name;

        temperature.innerText =
            Math.round(current.temperature_2m) + "°C";

        humidity.innerText =
            current.relative_humidity_2m + "%";

        windSpeed.innerText =
            current.wind_speed_10m + " km/h";

        description.innerText =
            getWeatherDescription(current.weather_code);

    }

    catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
}

function getWeatherDescription(code) {

    if (code === 0) {
        return "Clear Sky";
    }

    else if (code === 1 || code === 2) {
        return "Partly Cloudy";
    }

    else if (code === 3) {
        return "Cloudy";
    }

    else if (code === 45 || code === 48) {
        return "Foggy";
    }

    else if (code >= 51 && code <= 67) {
        return "Rainy";
    }

    else if (code >= 71 && code <= 77) {
        return "Snowy";
    }

    else if (code >= 80 && code <= 82) {
        return "Rain Showers";
    }

    else if (code >= 95) {
        return "Thunderstorm";
    }

    else {
        return "Unknown";
    }
}