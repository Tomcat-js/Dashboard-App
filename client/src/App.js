import React from "react";
import { DisplayArtwork, SelectStyle } from "./wallArt/wallArt";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [artStyle, setArtStyle] = React.useState(null);

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
    </div>
  );
}

export default App;
