import React from "react";
import styled from "styled-components";

export function DisplayArtwork(props) {
  const [artworkArr, setArtworkArr] = React.useState(null);
  const [imageIdx, setImageIdx] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const handleClick = () => {
    if (imageIdx < artworkArr.length - 1) {
      setImageIdx(imageIdx + 1);
    } else {
      setImageIdx(0);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    fetch(props.artStyle)
      .then((res) => res.json())
      .then((artIdArr) => {
        setLoading(false);
        setArtworkArr(artIdArr.idArr);
      });
  }, [props.artStyle]);

  if (loading) {
    return (
      <div className="frame" onClick={handleClick}>
        <Img
          src={
            "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=acecdf5bd8wvit3kvkfoc1zgg2xi0h7g5hi51sl9j0w3m5yd&rid=giphy.gif&ct=g"
          }
        />
      </div>
    );
  }

  return (
    <div className="frame" onClick={handleClick}>
      <Img
        src={`https://www.artic.edu/iiif/2/${artworkArr[imageIdx]}/full/843,/0/default.jpg`}
        onError={handleClick}
      />
    </div>
  );
}

function Img(props) {
  const [imageSrc, setImageSrc] = React.useState(null);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(props.src);
    };
    img.onerror = () => {
      props.onError();
    };
    img.src = props.src;
  }, [props.src]);

  return (
    <img
      className="picture"
      src={imageSrc}
      alt="art"
      onClick={props.handleClick}
    ></img>
  );
}

export function SelectStyle(props) {
  const [selectedDropdown, setSelectedDropdown] =
    React.useState("Choose a style");
  return (
    <div className="dropdown-art">
      <button className="dropbtn-art">{selectedDropdown}</button>
      <div className="dropdown-content-art">
        <button
          onClick={() => {
            props.setArtStyle("/surrealism");
            setSelectedDropdown("Surrealism");
          }}
        >
          Surrealism
        </button>
        <button
          onClick={() => {
            props.setArtStyle("/pop_art");
            setSelectedDropdown("Pop Art");
          }}
        >
          Pop art
        </button>
        <button
          onClick={() => {
            props.setArtStyle("/impressionism");
            setSelectedDropdown("Impressionism");
          }}
        >
          Impressionism
        </button>
        <button
          onClick={() => {
            props.setArtStyle("/modern");
            setSelectedDropdown("Modern");
          }}
        >
          Modern
        </button>
        <button
          onClick={() => {
            props.setArtStyle("/expressionism");
            setSelectedDropdown("Expressionism");
          }}
        >
          Expressionism
        </button>
        <button
          onClick={() => {
            props.setArtStyle("/rococo");
            setSelectedDropdown("Rococo");
          }}
        >
          Rococo
        </button>
      </div>
    </div>
  );
}
