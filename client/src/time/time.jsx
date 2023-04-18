import React from "react";

export function DisplayTime(props) {
  const [timeAndDate, setTimeAndDate] = React.useState({});

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
    <div>
      <h1>{timeAndDate.time}</h1>
      <h3>{timeAndDate.dateToday}</h3>
    </div>
  );
}
