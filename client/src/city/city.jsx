import React from "react";

export function SelectCity(props) {
  const [selectedCity, setSelectedCity] = React.useState("Choose a city");

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedCity}</button>
      <div className="dropdown-content">
        <button
          onClick={() => {
            setSelectedCity("Melbourne");
            props.setCityWeather("/melbourne");
            props.setCityTime("australia/melbourne");
          }}
        >
          Melbourne
        </button>
        <button
          onClick={() => {
            setSelectedCity("Tokyo");
            props.setCityWeather("/tokyo");
            props.setCityTime("Japan");
          }}
        >
          Tokyo
        </button>
        <button
          onClick={() => {
            setSelectedCity("New York");
            props.setCityWeather("/newYork");
            props.setCityTime("US/Eastern");
          }}
        >
          New York
        </button>
        <button
          onClick={() => {
            setSelectedCity("London");
            props.setCityWeather("/london");
            props.setCityTime("Europe/London");
          }}
        >
          London
        </button>
        <button
          onClick={() => {
            setSelectedCity("Paris");
            props.setCityWeather("/paris");
            props.setCityTime("Europe/Paris");
          }}
        >
          Paris
        </button>
      </div>
    </div>
  );
}
