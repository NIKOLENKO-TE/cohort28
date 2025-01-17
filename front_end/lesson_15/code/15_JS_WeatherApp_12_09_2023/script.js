const API_KEY = 'fa1e72ff893c6a4a5ed4077327e855b4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherContainer = document.getElementById('weatherContainer');

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value.trim();

    if (location) {
        const apiUrl = `${BASE_URL}?q=${location}&appid=${API_KEY}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => console.log(data))
    }
})