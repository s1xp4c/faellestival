import React, { useContext, useState, useEffect } from "react";
import { ScheduleContext } from "../../Contexts/ScheduleContext";
import PlayingCard from "./PlayingCard";

function PlayingNow(props) {
  const schedule = useContext(ScheduleContext);
  const [nowJotunheim, setNowJotunheim] = useState([]);
  const [nowVanaheim, setNowVanaheim] = useState([]);
  const [nowMidgard, setNowMidgard] = useState([]);

  let stages = Object.keys(schedule);

  let today = Date().split(" ");
  let [rawDay, , , , rawHour] = today;
  let currDay = rawDay.toLocaleLowerCase();
  let hour = rawHour.substring(0, 2);
  if (hour % 2 == 1) {
    hour = hour - 1;
  }
  let newHour = hour + ":00";
  let stageJArr = Object.entries(schedule.Jotunheim);
  // let stageJArr = [Object.entries(]schedule.Jotunheim);
  let getDayJ = stageJArr.filter((day) => day[0] == currDay);
  let distrTimeJ = [getDayJ[0][1]];
  let getTimeslotJ = [...distrTimeJ[0]];

  let stageVArr = Object.entries(schedule.Vanaheim);
  let getDayV = stageVArr.filter((day) => day[0] == currDay);
  let distrTimeV = [getDayV[0][1]];
  let getTimeslotV = [...distrTimeV[0]];

  let stageMArr = Object.entries(schedule.Midgard);
  let getDayM = stageMArr.filter((day) => day[0] == currDay);
  let distrTimeM = [getDayM[0][1]];
  let getTimeslotM = [...distrTimeM[0]];

  useEffect(() => {
    for (let i = 0; i < getTimeslotJ.length; i++) {
      if (getTimeslotJ[i].start == newHour) {
        setNowJotunheim(getTimeslotJ[i]);
      }
    }

    for (let i = 0; i < getTimeslotV.length; i++) {
      if (getTimeslotV[i].start == newHour) {
        setNowVanaheim(getTimeslotV[i]);
      }
    }

    for (let i = 0; i < getTimeslotM.length; i++) {
      if (getTimeslotM[i].start == newHour) {
        setNowMidgard(getTimeslotM[i]);
      }
    }
  }, [newHour]);

  function goToProgram() {
    props.setShowFestLandPage(false);
    props.setShowProgramPage(true);
    window.location = "#";
  }

  return (
    <div className="cardGrid">
      <PlayingCard
        className="playCard"
        btnContent={stages[0]}
        btnClassName="primBtn"
        action={goToProgram}
        content={nowJotunheim}
      />
      <PlayingCard
        className="playCard"
        btnContent={stages[1]}
        btnClassName="primBtn"
        action={goToProgram}
        content={nowVanaheim}
      />
      <PlayingCard
        className="playCard"
        btnContent={stages[2]}
        btnClassName="primBtn"
        action={goToProgram}
        content={nowMidgard}
      />
    </div>
  );
}

export default PlayingNow;
