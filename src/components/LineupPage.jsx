import React, { useContext } from "react";
import { ScheduleContext } from "../Contexts/ScheduleContext";
import Artist from "./UI/Artist";
import CardTitle from "./UI/CardTitle";
import Breadcrumbs from "./UI/Breadcrumbs";
import Title from "./UI/Title";
import LineupCard from "./UI/LineupCard"


function LineupPage(props) {
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
      <Title className="lineUpTitle gradientTxt" content="Line Up" />
      <div className="lineupGrid">
        {dayShort.map((day, index) => (
          <LineupCard key={index}>
            <CardTitle
              className="lineupTitle"
              head={week[index]}
              subHead={date[index]}
            />
            <p className="lineupCardContent">
              {scheduleData.Jotunheim[day].map(
                (day) => day.act !== "break" && <Artist content={day.act} />
              )}
              {scheduleData.Vanaheim[day].map(
                (day) => day.act !== "break" && <Artist content={day.act} />
              )}
              {scheduleData.Midgard[day].map(
                (day) => day.act !== "break" && <Artist content={day.act} />
              )}
            </p>

          </LineupCard>
        ))}
      </div>
    </>
  );
}

export default LineupPage;
