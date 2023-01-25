// import React from "react";
import React, { useRef } from "react";

import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

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
      <Artwork />
    </div>
  );
}

let imageIdx = 0;

function Artwork() {
  let currentImage = useRef();
  const [artworkImg, setArtworkImg] = React.useState(null);

  const handleClick = () => {
    if (imageIdx < 9) {
      imageIdx++;
    } else {
      imageIdx = 0;
    }
    setArtworkImg(currentImage.current[imageIdx]);
  };

  React.useEffect(() => {
    fetch("/artwork")
      .then((res) => res.json())
      .then((artIdArr) => {
        currentImage.current = artIdArr.idArr;
        setArtworkImg(currentImage.current[imageIdx]);
      });
  }, []);

  if (!artworkImg) {
    return null;
  }
  return (
    <img
      src={`https://www.artic.edu/iiif/2/${artworkImg}/full/843,/0/default.jpg`}
      alt="art"
      onClick={handleClick}
    ></img>
  );
}

export default App;
