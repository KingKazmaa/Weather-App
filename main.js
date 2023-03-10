//Initialize the api
const api = {
    key: "5e943be28d5f77d502c6633770b389b9",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

//add EventListener to searchbox to listen for a key to be pressed
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)
//If user presses keyCode 13(enter key), run getResults() w/ the value as the argument
function setQuery(evt) {
    if (evt.keyCode == 13) {
    getResults(searchbox.value);
    }
}
//fetch the url and key from the API at the top,THEN return the data, THEN display it
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}
//Attaches city to city, autocompletes country, updates date, temp, weather, and high/low temp
function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date()
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
}

    function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
    
        return `${day} ${date} ${month} ${year}`
    }