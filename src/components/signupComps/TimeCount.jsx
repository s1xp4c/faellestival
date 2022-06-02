import React, { useState, useRef, useEffect } from "react";

const TimeCount = ({ reservationTime, setPage, PageDisplay }) => {
  const [timeToAlert, setTimeToAlert] = useState();

  // This sets the timer to 6 minutes and 66 seconds (After 1 second, it counts from 6 minues as there obviously are not 66 seconds in a minute)
  const timeToKill = 420000;

  // USE THIS FOR A RESET TIMER BUTTON IF YOU WISH
  // const onResetOk = () => {
  //   clearTimer(getDeadTime());
  // };

  // Atempt @ setting the tomer from the response of "PUT"
  // useEffect(() => {
  //    setTimeToKill(300000);
  //   setTimeToKill(reservationTime);
  // }, []);

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00");

  // Make the point in time you, and calc the minutes and seconds
  // Hours commented out for use another day ;)
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    // For this festival we don't need hours ;)
    // const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      // For this festival we don't need hours ;)
      // hours,
      minutes,
      seconds,
    };
  };

  // Start the timer with calculated mm:ss
  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        // For this festival we don't need hours ;)
        // (hours > 9 ? hours : "0" + hours) +
        //   ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  // Set the timer to 6.66 minutes
  const clearTimer = (e) => {
    setTimer("06:66");

    // Restart timer every second with new value
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  // Set the actual seconds from now till deadline
  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + timeToKill / 1000);
    return deadline;
  };

  // Clear timer and return deadline
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // When timer reaches 00:01 --> Alert user and reset form page to first page
  useEffect(() => {
    if (timer === "00:01") {
      console.log(timer);
      alert("Sorry, your reservation timed out - Please try again <3");
      PageDisplay(setPage(0, (currPage) => (currPage = 0)));
      clearTimer(getDeadTime());
    }
  }, [timer]);
  return (
    <div className="countdown">
      <h3>{timer}</h3>
    </div>
  );
};

export default TimeCount;
