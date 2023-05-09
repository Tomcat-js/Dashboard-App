import React from "react";
import styled from "styled-components";

export function DisplayWeather(props) {
  const [weather, setWeather] = React.useState({
    location: { name: "Loading weather" },
    current: {
      temp_c: "",
      condition: {
        text: "",
        icon: "https://files.botsin.space/accounts/avatars/000/220/936/original/cb503376861300d2.png",
      },
    },
  });

  React.useEffect(() => {
    fetch(props.cityWeather)
      .then((res) => res.json())
      .then((weather) => setWeather(weather));
  }, [props.cityWeather]);

  return (
    <div className="weather_content">
      <WeatherLocation>{weather.location.name}</WeatherLocation>
      <WeatherConditions>
        <p>Temperature: {weather.current.temp_c}</p>
        <p>Condition: {weather.current.condition.text}</p>
      </WeatherConditions>
      <img src={weather.current.condition.icon} alt="Current Weather"></img>
    </div>
  );
}

const WeatherLocation = styled.h1`
  color: black;
  font-family: "Instrument+Serif", sans-serif;
`;

const WeatherConditions = styled.h3`
  font-family: "Oswald", sans-serif;
`;
