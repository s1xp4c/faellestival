import React, { useState } from "react";

function TicketAmountHandler({ formData, setFormData }) {
  const [ticketCount, setTicketCount] = useState(0);

  function handleIncrement() {
    if (ticketCount < 6) {
      setFormData({ ...formData, ticketAmount: ticketCount + 1 });
      setTicketCount((prevCount) => prevCount + 1);
    } else {
      alert("You reached max amount of tickets");
    }
  }
  function handleDecrement() {
    if (ticketCount > 0) {
      setFormData({ ...formData, ticketAmount: ticketCount - 1 });
      setTicketCount((prevCount) => prevCount - 1);
    } else {
      return;
    }
  }

  return (
    <div className="incr-decr-container">
      <div className="incr-decr-header">
        <h3>Ticket Amount</h3>
        <div className="flex-input">
          <span>*How many people are attending?</span>
          {/* </div> */}
          <div className="incr-decr-body ticket-incr-decr">
            <button
              className="decrementBtn"
              type="button"
              onClick={handleDecrement}
            >
              <span> - </span>
            </button>
            <input
              type="number"
              name="text"
              min={0}
              max={6}
              required={true}
              className="numberInput"
              value={ticketCount}
              onChange={(e) => {
                // console.log(formData.ticketAmount);
                setTicketCount(e.target.value);
                setFormData({ ...formData, ticketAmount: e.target.value });
              }}
            />
            <button
              className="incrementBtn"
              type="button"
              onClick={handleIncrement}
            >
              <span> + </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketAmountHandler;
