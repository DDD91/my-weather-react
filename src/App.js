import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
      <Weather defaultCity="New York" />
    <footer> 
      This project was coded by Devanie Dawson and is {" "} 
    <a 
    href= "https://github.com/DDD91/my-weather-react" 
    target="_blank" rel="noreferrer"
     >
      open-sourced on Github
    </a>
     </footer>
     </div>
    </div>
  );

}

