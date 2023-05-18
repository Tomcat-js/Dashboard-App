import React from "react";
import { DisplayArtwork, SelectStyle } from "./wallArt/wallArt.tsx";
import { DisplayWeather } from "./weather/weather.tsx";
import { SelectCity } from "./city/city.tsx";
import { DisplayTime } from "./time/time.tsx";
import { DisplayTV } from "./TV/tv.tsx";
import "./App.css";

function App() {
  const [artStyle, setArtStyle] = React.useState("/default_art");
  const [cityWeather, setCityWeather] = React.useState("melbourne");
  const [cityTime, setCityTime] = React.useState("Australia/Melbourne");

  return (
    <div className="mainbox">
      <div className="body">
        <section>
          <div className="art_content">
            <DisplayArtwork artStyle={artStyle} />
            <p className="click">Click painting to change</p>
            <SelectStyle setArtStyle={setArtStyle} />
          </div>
        </section>
        <section>
          <DisplayTV />
        </section>
        <section>
          <div className="section_content">
            <DisplayWeather cityWeather={cityWeather} />
            <SelectCity
              setCityWeather={setCityWeather}
              setCityTime={setCityTime}
            />
          </div>
        </section>
        <section>
          <div className="section_content">
            <DisplayTime cityTime={cityTime} />
          </div>
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
