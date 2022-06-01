import React, { useState, useRef, useEffect } from "react";

const TimeCount = ({ reservationTime, setPage, PageDisplay }) => {
  const [timeToAlert, setTimeToAlert] = useState();

  const timeToKill = 420000;
  // const onResetOk = () => {
  //   clearTimer(getDeadTime());
  // };

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

  const clearTimer = (e) => {
    setTimer("06:66");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + timeToKill / 1000);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    if (timer === "00:01") {
      console.log(timer);
      alert("Sorry, your time ran out - Please Start over <3");
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
