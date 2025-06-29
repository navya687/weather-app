const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('search').addEventListener('click', getWeatherData);

function getWeatherData() {
    const city = document.getElementById('city').value.trim();
    if (city !== '') {
        const url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => displayWeatherData(data))
            .catch(error => console.error('Error:', error));
    }
}
function displayWeatherData(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
}

