// declare variables

const APIKey = "9e38d5126129d897b3ddb585abf79cdc";
const currentDayEL = dayjs().format("MM DD, YYYY");
const displayEl = document.querySelector("#display");
const currentTempEl = document.querySelector("#temp");
const currentWindEL = document.querySelector("#wind");
const currentHumidityEL = document.querySelector("#humidity");
const citiesEl = document.querySelector("#cities");
const searchBtn = document.querySelector("#searchBtn");
const forecastResultsEl = document.querySelector("#forecastResults");


// TODO: Create function to search for city weather
function getWeather(event, city) {
    event.preventDefault();
    city = citiesEl.value.trim();
    let currentWeatherURL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

    fetch(currentWeatherURL)
        .then(data => data.json())
        .then(res => {
            console.log(res);
            displayEl.textContent = `${city} (${currentDayEL})`
            currentTempEl.textContent = `Temp: ${res.main.temp} °F`;
            currentWindEL.textContent = `Wind: ${res.wind.speed} MPH`;
            currentHumidityEL.textContent = `Humidity: ${res.main.humidity} %`;



            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${APIKey}&units=imperial`)
                .then(data => data.json())
                .then(res => {
                    console.log(res);
                    $("#display-1").text( `${city} (${dayjs().add(1, "days").format("MM DD, YYYY")})`);
                    $("#temp-1").text( `Temp: ${res.list[3].main.temp} °F`);
                    $("#wind-1").text( `Wind: ${res.list[3].wind.speed} MPH`);
                    $("#humidity-1").text( `Humidity: ${res.list[3].main.humidity} %`);

                    // displayEl.textContent = `${city} (${currentDayEL})`
                    // currentTempEl.textContent = `Temp: ${res.[].main.temp} °F`;
                    // currentWindEL.textContent = `Wind: ${res.[].windtext(
                    // currentHumidityEL.textContent = `Humidity: ${res.[].main.humidity} %`;

                    // displayEl.textContent = `${city} (${currentDayEL})`
                    // currentTempEl.textContent = `Temp: ${res.[].main.temp} °F`;
                    // currentWindEL.textContent = `Wind: ${res.[].wind.speed} MPH`;
                    // currentHumidityEL.textContent = `Humidity: ${res.[].main.humidity} %`;

                    // displayEl.textContent = `${city} (${currentDayEL})`
                    // currentTempEl.textContent = `Temp: ${res.[].main.temp} °F`;
                    // currentWindEL.textContent = `Wind: ${res.[].wind.speed} MPH`;
                    // currentHumidityEL.textContent = `Humidity: ${res.[].main.humidity} %`;

                    // displayEl.textContent = `${city} (${currentDayEL})`
                    // currentTempEl.textContent = `Temp: ${res.[].main.temp} °F`;
                    // currentWindEL.textContent = `Wind: ${res.[].wind.speed} MPH`;
                    // currentHumidityEL.textContent = `Humidity: ${res.[].main.humidity} %`;
                })
        })

}
// TODO: Locate city coordinates

// TODO: create search history buttons *Local Storage*

// TODO: Add delete buttons on history searches(if I have time, see project tracker for code)

// TODO: Display date(dayjs), city, temp, wind, humidity in containerMain card

// TODO:  Add icons to cards displaying weather conditions

// TODO: display in imperial units

// TODO: Function to display 5 seperate cards displaying attributes in container5Day

// TODO: Add Event Listener
searchBtn.addEventListener("click", getWeather);

