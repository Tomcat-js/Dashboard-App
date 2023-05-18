import React, { ReactElement } from "react";
import styled from "styled-components";

type timeProps = {
  cityTime: string;
};

export function DisplayTime(props: timeProps): ReactElement {
  const [timeAndDate, setTimeAndDate] = React.useState<{
    time: string;
    dateToday: string;
  }>({ time: "loading", dateToday: "loading" });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let timeZoneLocale = date.toLocaleString("en-US", {
        timeZone: props.cityTime,
      });

      let datePlusTime = timeZoneLocale.split(",");
      let dateToday = datePlusTime[0];
      let time = datePlusTime[1];

      setTimeAndDate({ dateToday, time });
    }, 1000);
    return () => clearInterval(interval);
  }, [props.cityTime]);

  return (
    <Wrapper className="time_content">
      <TimeScreen>
        <TimeDisplay>{timeAndDate.time}</TimeDisplay>
        <DateDisplay>{timeAndDate.dateToday}</DateDisplay>
      </TimeScreen>
    </Wrapper>
  );
}

const TimeDisplay = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  font-family: "Digital Numbers", sans-serif;
  padding: 0.5em;
`;

const DateDisplay = styled.h3`
  font-size: 01em;
  text-align: center;
  color: lightgrey;
  padding: 0.3em;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: rgb(189, 195, 199);
  background: linear-gradient(
    180deg,
    rgba(189, 195, 199, 0.6867121848739496) 30%,
    rgba(44, 62, 80, 0.6306897759103641) 89%
  );
  border-radius: 32px;
`;

const TimeScreen = styled.section`
  background: black;
  height: 50px;
  border-radius: 10px;
`;
