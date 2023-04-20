import React from "react";
import { DisplayArtwork, SelectStyle } from "./wallArt/wallArt";
import { DisplayWeather } from "./weather/weather";
import { SelectCity } from "./city/city";
import { DisplayTime } from "./time/time";
import { DisplayTV } from "./TV/tv";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [artStyle, setArtStyle] = React.useState("/default_art");
  const [cityWeather, setCityWeather] = React.useState("melbourne");
  const [cityTime, setCityTime] = React.useState("Australia/Melbourne");

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <header>
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <DisplayArtwork artStyle={artStyle} />
      <SelectStyle setArtStyle={setArtStyle} />
      <DisplayWeather cityWeather={cityWeather} />
      <SelectCity setCityWeather={setCityWeather} setCityTime={setCityTime} />
      <DisplayTime cityTime={cityTime} />
      <DisplayTV />
    </div>
  );
}

export default App;
