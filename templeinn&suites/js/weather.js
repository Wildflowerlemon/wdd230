const currentTemp = document.querySelector("#current-temp");
//const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");
const timeElement = document.querySelector("#time");
const humidity = document.querySelector("#humidity");
const place = document.querySelector("#place")


const url = `https://api.openweathermap.org/data/2.5/weather?lat=38.9807&lon=-77.1003&units=Imperial&appid=a799af7373f5f72e87640f75e2ec6243`;


apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    const day = new Date(weatherData.dt * 1000);
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(day);
    timeElement.innerHTML = `${fulldateUK}`;
    place.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    //weatherIcon.setAttribute("src", imagesrc);
    //weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)} mph`;
    windChill.innerHTML = `${weatherData.main.feels_like.toFixed(0)} &deg;F`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    
}
