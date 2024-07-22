const API_KEY = "00d2ad7cfd5d83ebde0972552006696e";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SEARCH_BOX = document.querySelector(".search input");
const SEARCH_BTN = document.querySelector(".search button");
const WEATHER_ICON = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if(response.status == 404) { // error encountered
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            WEATHER_ICON.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            WEATHER_ICON.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            WEATHER_ICON.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            WEATHER_ICON.src = "images/Drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            WEATHER_ICON.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow") {
            WEATHER_ICON.src = "images/snow.png";
        }
        else {
            WEATHER_ICON.src = "images/haze.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

SEARCH_BTN.addEventListener("click", ()=>{
    checkWeather(SEARCH_BOX.value);
});