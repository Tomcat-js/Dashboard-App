import React from "react";

export function DisplayTV() {
  const [channelArr, setChannelArr] = React.useState([
    {
      images: {
        original: {
          url: "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=acecdf5bd8wvit3kvkfoc1zgg2xi0h7g5hi51sl9j0w3m5yd&rid=giphy.gif&ct=g",
        },
      },
    },
  ]);
  const [channelIdx, setChannelIdx] = React.useState(0);

  const handleClick = () => {
    if (channelIdx < channelArr.length - 1) {
      setChannelIdx(channelIdx + 1);
    } else {
      setChannelIdx(0);
    }
  };

  React.useEffect(() => {
    fetch("/tv")
      .then((res) => res.json())
      .then((gifArr) => {
        setChannelArr(gifArr);
      });
  }, []);

  return (
    <div onClick={handleClick}>
      <img
        src={channelArr[channelIdx].images.original.url}
        alt={"TV screen"}
      ></img>
    </div>
  );
}
