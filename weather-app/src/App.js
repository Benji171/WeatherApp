import React from 'react';
import './App.css';

// const api = {
//   key: '4f202515b8b40e20a36d3096794eeaa3',
//   base: 'api.openweathermap.org/data/2.5/'
// }

function App() {

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


  return (
    <div className="app">
     <main>
       <div className="search-box">
         <input
           type="text"
           className="search-bar"
           placeholder="Search..."
         />
       </div>

       <div className="location-box">
         <div className="location">New York</div>
         <div className="date">{dateBuilder(new Date())}</div>
       </div>

       <div>
         <div className="temp">15</div>
         <div className="weather">Sunny</div>
       </div>
     </main>
    </div>
  );
}

export default App;
