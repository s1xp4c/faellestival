import React, { Fragment } from "react";

const Countdown = ({ timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="countdown-container">
        <section className="timer-countdown">
          <div className="countdown">
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>{" "}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

TimeCount.defaultProps = {
  timerMinutes: 07,
  timerSeconds: 06,
};

export default Countdown;
