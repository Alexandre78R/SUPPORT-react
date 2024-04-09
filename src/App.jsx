import React, { useState } from "react";
import axios from "axios";
import FetchWeather from "./components/FetchWeather/FetchWeather";

function App() {
  const [weather, setWeather] = useState();
  const getWeather = () => {
    axios
      .get(
        "https://api.open-meteo.com/v1/meteofrance?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      )
      .then((response) => {
        setWeather(response.data);
      });
  };

  return (
    <div>
      {weather && (
        <FetchWeather
          latitude={weather.latitude}
          longitude={weather.longitude}
          timezone={weather.timezone}
          hourly={weather.hourly}
        />
      )}
      <button type="button" onClick={getWeather}>
        Get Weather
      </button>
    </div>
  );
}
export default App;
