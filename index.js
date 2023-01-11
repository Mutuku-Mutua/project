
 const searchBox = document.querySelector('.search-box');
 searchBox.addEventListener('keypress',setQuery);
 const backgroundImg = document.querySelector("img")
 function setQuery(event) {
    if (event.keyCode == 13){
        getResults(searchBox.value);
        searchBox.value = ""   
    } 
 }

 function getResults (query) {
    fetch(`${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);

 }

 function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.Location .City');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.Location .date');
    date.innerText = dateBuilder(now);


     let temp = document.querySelector('.Temp');
     temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F </span>`;

     let celsius = (weather.main.temp - 32) * (5 / 9);

     temp.addEventListener("click", () =>{
      temp.innerHTML = `${Math.floor(celsius)}<span>°C</span>`
      
     })

     let weatherEl = document.querySelector('.current .weather');
     weatherEl.innerText = weather.weather[0].main;

     

     let hiLow = document.querySelector('.hi-low');
     hiLow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;

     backgroundImg.src = "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

 }    
 function dateBuilder (d) {
    let months = ["January","February","March","April","May",
    "June","July","August","september",
    "October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
 }