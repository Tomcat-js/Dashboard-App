import React from "react";
import { DisplayArtwork, SelectStyle } from "./wallArt/wallArt";
import { DisplayWeather } from "./weather/weather";
import { SelectCity } from "./city/city";
import { DisplayTime } from "./time/time";
import { DisplayTV } from "./TV/tv";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

function App() {
  const [artStyle, setArtStyle] = React.useState("/default_art");
  const [cityWeather, setCityWeather] = React.useState("melbourne");
  const [cityTime, setCityTime] = React.useState("Australia/Melbourne");

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
