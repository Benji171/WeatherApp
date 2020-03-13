import React from 'react';
import './App.css';

// const api = {
//   key: '4f202515b8b40e20a36d3096794eeaa3',
//   base: 'api.openweathermap.org/data/2.5/'
// }

function App() {




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
     </main>
    </div>
  );
}

export default App;
