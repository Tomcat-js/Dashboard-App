import React from "react";

export function DisplayWeather(props) {
  const [weather, setWeather] = React.useState({
    location: { name: "Weather" },
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
    <div>
      <p>{weather.location.name}</p>
      <p>{weather.current.temp_c}</p>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="Current Weather"></img>
    </div>
  );
}

export function SelectCity(props) {
  const [selectedCity, setSelectedCity] = React.useState("Choose a city");

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedCity}</button>
      <div className="dropdown-content">
        <button
          onClick={() => {
            setSelectedCity("Melbourne");
            DisplayWeather(props.setCityWeather("/melbourne"));
          }}
        >
          Melbourne
        </button>
        <button
          onClick={() => {
            setSelectedCity("Tokyo");
            DisplayWeather(props.setCityWeather("/tokyo"));
          }}
        >
          Tokyo
        </button>
        <button
          onClick={() => {
            setSelectedCity("New York");
            DisplayWeather(props.setCityWeather("/newYork"));
          }}
        >
          New York
        </button>
        <button
          onClick={() => {
            setSelectedCity("London");
            DisplayWeather(props.setCityWeather("/london"));
          }}
        >
          London
        </button>
        <button
          onClick={() => {
            setSelectedCity("Paris");
            DisplayWeather(props.setCityWeather("/paris"));
          }}
        >
          Paris
        </button>
      </div>
    </div>
  );
}
