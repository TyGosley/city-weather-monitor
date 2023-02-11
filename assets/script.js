// declare variables

const APIKey = "9e38d5126129d897b3ddb585abf79cdc";
const currentDayEL = dayjs().format("MMMM DD, YYYY");
const displayEl = document.querySelector("#display");
const currentTempEl = document.querySelector("#temp");
const currentWindEL = document.querySelector("#wind");
const currentHumidityEL = document.querySelector("#humidity");
const citiesEl = document.querySelector("#cities");
const searchBtn = document.querySelector("#searchBtn");
const historyList = document.querySelector(".searchHistory");
const searchHistoryContainer = document.querySelector('.searchHistory');
// const historyEl = JSON.parse(localStorage.getItem("userCity")) || [];
const citiesArray = [];
// const icons = https://openweathermap.org/img/wn/10d@2x.png



// TODO: Add delete buttons on history searches(if I have time, see project tracker for code)



// ✅ Create function to search for city weather
// ✅ created function for local storage
function userInput(city) {
    citiesArray.push(city);
    localStorage.setItem("searchHistory", JSON.stringify(citiesArray));
}
// TODO: create search history buttons *Local Storage*
// ✅ create function to making btns
function userSearchButtons(userInput) {
    historyList.innerHTML = "";
    console.log(citiesArray)
    for (let i = 0; i < citiesArray.length; i++) {
        let city = citiesArray[i];
        let cityBtn = document.createElement("button");
        cityBtn.setAttribute("type", "button");
        cityBtn.classList.add('history-btn', 'btn-history');
        cityBtn.setAttribute('data-search', citiesArray);
        cityBtn.innerHTML = city;

        cityBtn.addEventListener("click", (getWeather) => {
        });
        historyList.appendChild(cityBtn)
    }
}

function handleSearchHistoryClick(e) {
    // Don't do search if current elements is not a search history button
    if (!e.target.matches('.btn-history')) {
        return;
    }

    var btn = e.target;
    var search = btn.getAttribute('data-search');
    console.log(search);
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
            displayEl.textContent = `${city} (${currentDayEL})`
            currentTempEl.textContent = `Temp: ${res.main.temp} °F`;
            currentWindEL.textContent = `Wind: ${res.wind.speed} MPH`;
            currentHumidityEL.textContent = `Humidity: ${res.main.humidity} %`;



            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${APIKey}&units=imperial`)
                .then(data => data.json())
                .then(res => {
                    console.log(res);
                    $("#display-1").text(`${city} (${dayjs().add(1, "days").format("MMMM DD, YYYY")}) `);
                    $("#temp-1").text(`Temp: ${res.list[3].main.temp} °F`);
                    $("#wind-1").text(`Wind: ${res.list[3].wind.speed} MPH`);
                    $("#humidity-1").text(`Humidity: ${res.list[3].main.humidity} %`);

                    $("#display-2").text(`${city} (${dayjs().add(2, "days").format("MMMM DD, YYYY")})`);
                    $("#temp-2").text(`Temp: ${res.list[11].main.temp} °F`);
                    $("#wind-2").text(`Wind: ${res.list[11].wind.speed} MPH`);
                    $("#humidity-2").text(`Humidity: ${res.list[11].main.humidity} %`);

                    $("#display-3").text(`${city} (${dayjs().add(3, "days").format("MMMM DD, YYYY")})`);
                    $("#temp-3").text(`Temp: ${res.list[19].main.temp} °F`);
                    $("#wind-3").text(`Wind: ${res.list[19].wind.speed} MPH`);
                    $("#humidity-3").text(`Humidity: ${res.list[19].main.humidity} %`);

                    $("#display-4").text(`${city} (${dayjs().add(4, "days").format("MMMM DD, YYYY")})`);
                    $("#temp-4").text(`Temp: ${res.list[27].main.temp} °F`);
                    $("#wind-4").text(`Wind: ${res.list[27].wind.speed} MPH`);
                    $("#humidity-4").text(`Humidity: ${res.list[27].main.humidity} %`);

                    $("#display-5").text(`${city} (${dayjs().add(5, "days").format("MMMM DD, YYYY")})`);
                    $("#temp-5").text(`Temp: ${res.list[35].main.temp} °F`);
                    $("#wind-5").text(`Wind: ${res.list[35].wind.speed} MPH`);
                    $("#humidity-5").text(`Humidity: ${res.list[35].main.humidity} %`);



                })
        })
    userSearchButtons();
}
// ✅ Locate city coordinates


// ✅ Display date(dayjs), city, temp, wind, humidity in containerMain card

// TODO:  Add icons to cards displaying weather conditions

// ✅ display in imperial units

// ✅ Function to display 5 seperate cards displaying attributes in container5Day

// ✅ Add Event Listener✅
searchBtn.addEventListener("click", getWeather);

