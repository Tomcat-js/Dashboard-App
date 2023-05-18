import React from "react";

export function DisplayTV() {
  const loadingUrl =
    "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=acecdf5bd8wvit3kvkfoc1zgg2xi0h7g5hi51sl9j0w3m5yd&rid=giphy.gif&ct=g";

  const [channelArr, setChannelArr] = React.useState([
    {
      images: {
        original: {
          url: loadingUrl,
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
        console.log("I fire once");
      });
  }, []);

  return (
    <div className="section_content">
      <div className="television">
        <div className="television__top">
          <div className="television__antenna television__antenna--left"></div>
          <div className="television__antenna television__antenna--right"></div>
          <div className="television__antenna__base"></div>
        </div>
        <div className="television__center">
          <div className="television__screen">
            <div onClick={handleClick}>
              <img
                className="tv"
                src={channelArr[channelIdx].images.original.url}
                alt={"TV screen"}
              ></img>
            </div>
          </div>
          <div className="television__channels-wrapper"></div>
        </div>
        <div className="television__base">
          <div className="television__foot television__foot--left"></div>
          <div className="television__foot television__foot--right"></div>
        </div>
        <p className="click">Click screen to change channel</p>
      </div>
    </div>
  );
}
