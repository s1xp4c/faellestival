// import { useContext } from "react"
// import React from 'react'

function ReservationRequest(props) {
  const reservationData = {
    area: props.campsite,
    amount: props.ticketAmount,
  };

  const putReservationData = JSON.stringify(reservationData);
  const ENDPOINT_URL = props.putPoint;

  console.log("Putting area data");

  fetch(`${ENDPOINT_URL}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: putReservationData,
  }).then((response) => response.json());
  // .then(main.displayListFromGet())
}

export default ReservationRequest;
