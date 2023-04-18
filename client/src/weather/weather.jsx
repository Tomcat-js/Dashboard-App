import React from "react";

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
    <div>
      <p>{weather.location.name}</p>
      <p>{weather.current.temp_c}</p>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="Current Weather"></img>
    </div>
  );
}
