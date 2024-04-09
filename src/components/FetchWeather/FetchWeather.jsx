import React from "react";

function FetchWeather(props) {
  const { latitude, longitude, timezone, hourly } = props;
  return (
    <div>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <p>{timezone}</p>
      <p>{hourly.time}</p>
    </div>
  );
}

export default FetchWeather;
