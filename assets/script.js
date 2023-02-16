// Declare variables

const APIKey = "9e38d5126129d897b3ddb585abf79cdc";
const currentDayEL = dayjs().format("MMMM DD, YYYY");
const displayEl = document.querySelector("#display");
const iconEl = document.querySelector("#icon");
const currentTempEl = document.querySelector("#temp");
const currentWindEL = document.querySelector("#wind");
const currentHumidityEL = document.querySelector("#humidity");
const citiesEl = document.querySelector("#cities");
const searchBtn = document.querySelector("#searchBtn");
const historyList = document.querySelector(".searchHistory");
const searchHistoryContainer = document.querySelector('.searchHistory');
let citiesArray = [];


function getHistory() {
    localStorage.getItem("citiesArray", JSON.stringify(citiesArray));
    if (citiesArray.length > 0) {
        JSON.parse(localStorage.getItem(citiesArray))
    }
    userSearchButtons();
}
getHistory();


function userInput(city) {
    localStorage.getItem("citiesArray", JSON.stringify(citiesArray));
    if (citiesArray.length > 0) {
        JSON.parse(localStorage.getItem(citiesArray))
        citiesArray.push(city);
    } else {
        citiesArray = [city];
    }
    localStorage.setItem("searchHistory", JSON.stringify(citiesArray));
}

function userSearchButtons(userInput) {
    historyList.innerHTML = "";
    console.log(citiesArray)
    for (let i = 0; i < citiesArray.length; i++) {
        let city = citiesArray[i];
        let cityBtn = document.createElement("button");
        cityBtn.setAttribute("type", "button");
        cityBtn.classList.add('history-btn', 'btn-history');
        cityBtn.setAttribute('data-search', citiesArray[i]);
        cityBtn.innerHTML = city
        cityBtn.addEventListener("click", function () {
            city = cityBtn.innerHTML.trim();

            let currentWeatherURL =
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
            console.log(city);
            fetch(currentWeatherURL)
                .then(data => data.json())
                .then(res => {
                    console.log(res);
                    displayEl.textContent = `${city} (${currentDayEL})`;
                    currentTempEl.textContent = `Temp: ${res.main.temp} °F`;
                    currentWindEL.textContent = `Wind: ${res.wind.speed} MPH`;
                    currentHumidityEL.textContent = `Humidity: ${res.main.humidity} %`;



                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${APIKey}&units=imperial`)
                        .then(data => data.json())
                        .then(res => {
                            console.log(res);
                            $("#display-1").text(`${city} (${dayjs().add(1, "days").format("MMMM DD, YYYY")}) `);
                            document.querySelector("#icon1").src = `http://openweathermap.org/img/wn/${res.list[3].weather[0].icon}@2x.png`
                            $("#temp-1").text(`Temp: ${res.list[3].main.temp} °F`);
                            $("#wind-1").text(`Wind: ${res.list[3].wind.speed} MPH`);
                            $("#humidity-1").text(`Humidity: ${res.list[3].main.humidity} %`);

                            $("#display-2").text(`${city} (${dayjs().add(2, "days").format("MMMM DD, YYYY")})`);
                            document.querySelector("#icon2").src = `http://openweathermap.org/img/wn/${res.list[11].weather[0].icon}@2x.png`
                            $("#temp-2").text(`Temp: ${res.list[11].main.temp} °F`);
                            $("#wind-2").text(`Wind: ${res.list[11].wind.speed} MPH`);
                            $("#humidity-2").text(`Humidity: ${res.list[11].main.humidity} %`);

                            $("#display-3").text(`${city} (${dayjs().add(3, "days").format("MMMM DD, YYYY")})`);
                            document.querySelector("#icon3").src = `http://openweathermap.org/img/wn/${res.list[19].weather[0].icon}@2x.png`
                            $("#temp-3").text(`Temp: ${res.list[19].main.temp} °F`);
                            $("#wind-3").text(`Wind: ${res.list[19].wind.speed} MPH`);
                            $("#humidity-3").text(`Humidity: ${res.list[19].main.humidity} %`);

                            $("#display-4").text(`${city} (${dayjs().add(4, "days").format("MMMM DD, YYYY")})`);
                            document.querySelector("#icon4").src = `http://openweathermap.org/img/wn/${res.list[27].weather[0].icon}@2x.png`
                            $("#temp-4").text(`Temp: ${res.list[27].main.temp} °F`);
                            $("#wind-4").text(`Wind: ${res.list[27].wind.speed} MPH`);
                            $("#humidity-4").text(`Humidity: ${res.list[27].main.humidity} %`);

                            $("#display-5").text(`${city} (${dayjs().add(5, "days").format("MMMM DD, YYYY")})`);
                            document.querySelector("#icon5").src = `http://openweathermap.org/img/wn/${res.list[35].weather[0].icon}@2x.png`
                            $("#temp-5").text(`Temp: ${res.list[35].main.temp} °F`);
                            $("#wind-5").text(`Wind: ${res.list[35].wind.speed} MPH`);
                            $("#humidity-5").text(`Humidity: ${res.list[35].main.humidity} %`);
                        })
                })
            userSearchButtons();
        })
        historyList.appendChild(cityBtn)
    }
}

function handleSearchHistoryClick(e) {
    const btn = e.target;
    const cityName = btn.getAttribute('data-search');

}
searchHistoryContainer.addEventListener("click", handleSearchHistoryClick);

function getWeather(event, city) {
    event.preventDefault();
    city = citiesEl.value.trim();
    userInput(city)

    let currentWeatherURL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
    console.log(city);
    fetch(currentWeatherURL)
        .then(data => data.json())
        .then(res => {
            console.log(res);
            displayEl.textContent = `${city} (${currentDayEL})`;
            currentTempEl.textContent = `Temp: ${res.main.temp} °F`;
            currentWindEL.textContent = `Wind: ${res.wind.speed} MPH`;
            currentHumidityEL.textContent = `Humidity: ${res.main.humidity} %`;

            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${APIKey}&units=imperial`)
                .then(data => data.json())
                .then(res => {
                    console.log(res);
                    $("#display-1").text(`${city} (${dayjs().add(1, "days").format("MMMM DD, YYYY")}) `);
                    document.querySelector("#icon1").src = `http://openweathermap.org/img/wn/${res.list[3].weather[0].icon}@2x.png`
                    $("#temp-1").text(`Temp: ${res.list[3].main.temp} °F`);
                    $("#wind-1").text(`Wind: ${res.list[3].wind.speed} MPH`);
                    $("#humidity-1").text(`Humidity: ${res.list[3].main.humidity} %`);

                    $("#display-2").text(`${city} (${dayjs().add(2, "days").format("MMMM DD, YYYY")})`);
                    document.querySelector("#icon2").src = `http://openweathermap.org/img/wn/${res.list[11].weather[0].icon}@2x.png`
                    $("#temp-2").text(`Temp: ${res.list[11].main.temp} °F`);
                    $("#wind-2").text(`Wind: ${res.list[11].wind.speed} MPH`);
                    $("#humidity-2").text(`Humidity: ${res.list[11].main.humidity} %`);

                    $("#display-3").text(`${city} (${dayjs().add(3, "days").format("MMMM DD, YYYY")})`);
                    document.querySelector("#icon3").src = `http://openweathermap.org/img/wn/${res.list[19].weather[0].icon}@2x.png`
                    $("#temp-3").text(`Temp: ${res.list[19].main.temp} °F`);
                    $("#wind-3").text(`Wind: ${res.list[19].wind.speed} MPH`);
                    $("#humidity-3").text(`Humidity: ${res.list[19].main.humidity} %`);

                    $("#display-4").text(`${city} (${dayjs().add(4, "days").format("MMMM DD, YYYY")})`);
                    document.querySelector("#icon4").src = `http://openweathermap.org/img/wn/${res.list[27].weather[0].icon}@2x.png`
                    $("#temp-4").text(`Temp: ${res.list[27].main.temp} °F`);
                    $("#wind-4").text(`Wind: ${res.list[27].wind.speed} MPH`);
                    $("#humidity-4").text(`Humidity: ${res.list[27].main.humidity} %`);

                    $("#display-5").text(`${city} (${dayjs().add(5, "days").format("MMMM DD, YYYY")})`);
                    document.querySelector("#icon5").src = `http://openweathermap.org/img/wn/${res.list[35].weather[0].icon}@2x.png`
                    $("#temp-5").text(`Temp: ${res.list[35].main.temp} °F`);
                    $("#wind-5").text(`Wind: ${res.list[35].wind.speed} MPH`);
                    $("#humidity-5").text(`Humidity: ${res.list[35].main.humidity} %`);



                })
        })
    userSearchButtons();
}
searchBtn.addEventListener("click", getWeather);
