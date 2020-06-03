import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row } from "reactstrap";
import NewsCard from ".//components/newsCard"

const weatherApi = {
  key: '4f202515b8b40e20a36d3096794eeaa3',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const newsApi = {
  key: 'dc9d8ec259454ec7bad3c9b219ddc773',
  base: 'https://newsapi.org/v2/'
}

function App () {
  const [background, setBackground] = useState('app-start')
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const [news, setNews] = useState([]);

  const search = (e, day, month, year) => {
    if (e.key === "Enter") {
      Promise.all([
        fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`).then(value => value.json()),
      ]).then((res) => {
          console.log(res);
          setWeather(res[0]);
          setBackground(`app-${res[0].weather[0].main.toLowerCase()}`);
          setQuery('');
      })
      .catch(err => { console.log(err) });
    }
    else {}
  }
  console.log(background);
  console.log("Weather", weather);
  console.log("News", news);

  const dateBuilder = (d) => {
    let months= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  // function degreeToggle () {
  //   if (document.querySelector("celcius").innerHtml = "°C") {
  //       document.querySelectorAll("tempSwitch").innerHtml + 273;
  //   }
  // }

  return (
    <div  className={background}>
     <main>

       <div className="search-box">
         <input
           type="text"
           className="search-bar"
           placeholder="Search..."
           onChange={e => setQuery(e.target.value)}
           value={query}
           onKeyPress={search}
         />
       </div>

       {(typeof weather.main != "undefined") ? (
         <div className="info-box">
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box" onClick="degreeToggle">
              <div className="top-container">
                <div className="hi-stats">H {Math.round(weather.main.temp_max)}°</div> 
                <div className="celcius">°C</div>
                <div className="lo-stats">L {Math.round(weather.main.temp_min)}°</div>
              </div>
  
              <div className="coordinates">Lat: {Math.round(weather.coord.lat * 10) / 10} | Lon {Math.round(weather.coord.lon * 10) / 10}</div>
              <div className="temp">
                {Math.round(weather.main.temp)}
              </div>
              <div className="humidity">Humidity: {weather.main.humidity}%</div>

              <div className="bottom-container">
                <div className="wind-speed">Wind: {weather.wind.speed}KPH</div>
                <div className="weather">{weather.weather[0].main}</div>
                <div className="feels-like">Feels Like: {Math.round(weather.main.feels_like)}°</div>
              </div>
            </div>
         </div>
       ) : ("")}

     </main>

    </div>
  );
}

export default App;
