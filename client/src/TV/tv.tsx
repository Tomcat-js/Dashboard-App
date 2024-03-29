import React from "react";
import { useQuery } from "react-query";

interface gifObject {
  images: {
    original: {
      url: string;
    };
  };
}

export function DisplayTV() {
  const { data, isLoading, isError, error } = useQuery<gifObject[], Error>(
    "fetchGifs",
    async () => {
      const response = await fetch("/tv").then((res) =>
        res.json().then((gifArr) => {
          return gifArr;
        })
      );
      if (response) {
        return response;
      } else {
        throw new Error("Network response error");
      }
    },
    {
      staleTime: 120000,
    }
  );

  const [channelIdx, setChannelIdx] = React.useState(0);

  const handleClick = () => {
    if (data) {
      if (channelIdx < data.length - 1) {
        setChannelIdx(channelIdx + 1);
      } else {
        setChannelIdx(0);
      }
    }
  };

  const loadingUrl =
    "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=acecdf5bd8wvit3kvkfoc1zgg2xi0h7g5hi51sl9j0w3m5yd&rid=giphy.gif&ct=g";

  if (isLoading) {
    return (
      <TvBody>
        <div className="television__screen">
          <img className="tv" src={loadingUrl} alt={"TV screen"}></img>
        </div>
      </TvBody>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <TvBody>
      <div className="television__screen">
        <div onClick={handleClick}>
          <img
            className="tv"
            src={data && data[channelIdx].images.original.url}
            alt={"TV screen"}
          ></img>
        </div>
      </div>
    </TvBody>
  );
}

type Props = {
  children: JSX.Element;
};

function TvBody(props: Props) {
  return (
    <div className="section_content">
      <div className="television">
        <div className="television__top">
          <div className="television__antenna television__antenna--left"></div>
          <div className="television__antenna television__antenna--right"></div>
          <div className="television__antenna__base"></div>
        </div>
        <div className="television__center">
          {props.children}
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
