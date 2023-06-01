import React, { useState } from "react";
import WeatherIcon from "react-open-weather-icons";
import axios from "axios";

import "./App.css";

export default function SearchEng(props) {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  // let [temp, setTemp] = useState("");
  // let [desc, setDesc] = useState("");
  // let [wind, setWind] = useState("");
  // let [humidity, setHumidity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(url).then(displayer);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayer(response) {
    console.log(response.data);
    let temp = response.data.main.temp;
    let desc = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = response.data.weather[0].icon;
    setResult(
      <div>
        <ul>
          <li>Temperature: {temp}˚C</li>
          <li>Description: {desc}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <WeatherIcon name={icon} size="10px" />
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City" onChange={updateCity} />
        <input type="submit" value="submit" />
      </form>
      <h2>{result}</h2>
    </div>
  );
}
