import React, { useContext } from "react";
// import { BandsContext } from "../Contexts/BandsContext";
import { ScheduleContext } from "../Contexts/ScheduleContext";
import Artist from "./UI/Artist";
import CardTitle from "./UI/CardTitle";
// import MainSect from "./sections/MainSect";
import Breadcrumbs from "./UI/Breadcrumbs";
import Title from "./UI/Title";

function LineupPage(props, index) {
  const scheduleData = useContext(ScheduleContext);

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = [
    "25th of July",
    "26th of July",
    "27th of July",
    "28th of July",
    "29th of July",
    "30th of July",
    "31th of July",
  ];
  const dayShort = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  function goToMain() {
    props.setShowLineup(false);
    props.setShowLandPage(true);
    window.location = "#";
  }

  return (
    <>
      <Breadcrumbs
        className="gobackLineup"
        bcReg="Main"
        {...props}
        action={goToMain}
      />
      <Title className="headLine gradientTxt" content="Line Up" key={index} />
      <div className="lineupGrid">
        {dayShort.map((day, index) => (
          <div className="lineupCard" key={index}>
            <CardTitle
              className="lineupTitle"
              head={week[index]}
              subHead={date[index]}
              key={index}
            />
            <p className="lineupCardContent">
              {scheduleData.Jotunheim[day].map(
                (day, index) =>
                  day.act !== "break" && (
                    <Artist content={day.act} key={index} />
                  )
              )}
              {scheduleData.Vanaheim[day].map(
                (day, index) =>
                  day.act !== "break" && (
                    <Artist content={day.act} key={index} />
                  )
              )}
              {scheduleData.Midgard[day].map(
                (day, index) =>
                  day.act !== "break" && (
                    <Artist content={day.act} key={index} />
                  )
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default LineupPage;
