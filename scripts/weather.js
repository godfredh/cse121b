/* LESSON Project Work- Weather Forecast App */

/* Weather API Configuration */
const apiKey = "c1871e47ab5bbba6edcfa47e173c3936";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

/* DOM Elements */
const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorContainer = document.querySelector(".error");

/* Functions */
/* Function Definition - Check Weather */
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        errorContainer.style.display = "none";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        errorContainer.style.display = "block";
    }
}

/* Event Listeners */
searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

/* Footer Content */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Additional Weather API Integration */
/* Output Source Array */
let sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = sourceArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = sourceArray.filter(
    (number) => number % 2 != 0
);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = sourceArray.filter(
    (number) => number % 2 === 0
);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = sourceArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = sourceArray.map(
    (number) => number * 2
);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = sourceArray
    .map((number) => number * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
