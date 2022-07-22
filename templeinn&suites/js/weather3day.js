const tomorrowTemp = document.querySelector("#tomorrowTemp")
const seconddayTemp = document.querySelector("#seconddayTemp");
const thirddayTemp = document.querySelector("#thirddayTemp");
const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
const date3 = document.querySelector("#date3");
const weatherIconDate1 = document.querySelector("#weatherIconDate1");
const weatherIconDate2 = document.querySelector("#weatherIconDate2");
const weatherIconDate3 = document.querySelector("#weatherIconDate3");

const multipleweatherurl = `https://api.openweathermap.org/data/2.5/forecast?lat=38.9807&lon=-77.1003&appid=a799af7373f5f72e87640f75e2ec6243`;



apiFetch(multipleweatherurl);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            display3dayResults(data);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
        console.log(error);
    }
}

function display3dayResults(weatherData) {
    const tomorrowfahrenheit = ((weatherData.list[4].main.temp - 273.15 ) * 1.8 ) + 32;
    tomorrowTemp.innerHTML = `${tomorrowfahrenheit.toFixed(0)}&deg;F`;

    const seconddayfahrenheit = ((weatherData.list[12].main.temp - 273.15 ) * 1.8 ) + 32;
    seconddayTemp.innerHTML = `${seconddayfahrenheit.toFixed(0)}&deg;F`;

    const thirddayfahrenheit = ((weatherData.list[20].main.temp - 273.15 ) * 1.8 ) + 32;
    thirddayTemp.innerHTML = `${thirddayfahrenheit.toFixed(0)}&deg;F`;

    const day1 = new Date(weatherData.list[4].dt * 1000);
    date1.innerHTML = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(day1);
    
    const day2 = new Date(weatherData.list[12].dt * 1000);
    date2.innerHTML = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(day2);

    const day3 = new Date(weatherData.list[20].dt * 1000);
    date3.innerHTML = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(day3);

    const imagesrcdate1 = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const desc1 = weatherData.list[4].weather[0].description;
    weatherIconDate1.setAttribute("src", imagesrcdate1);
    weatherIconDate1.setAttribute('alt', desc1);

    const imagesrcdate2 = `https://openweathermap.org/img/w/${weatherData.list[10].weather[0].icon}.png`;
    const desc2 = weatherData.list[12].weather[0].description;
    weatherIconDate2.setAttribute("src", imagesrcdate2);
    weatherIconDate2.setAttribute('alt', desc2);

    const imagesrcdate3 = `https://openweathermap.org/img/w/${weatherData.list[18].weather[0].icon}.png`;
    const desc3 = weatherData.list[20].weather[0].description;
    weatherIconDate3.setAttribute("src", imagesrcdate3);
    weatherIconDate3.setAttribute('alt', desc3);
}
