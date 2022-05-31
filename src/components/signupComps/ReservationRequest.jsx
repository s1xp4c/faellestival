import React, { useState, useEffect } from "react";

// import React from 'react'

function ReservationRequest({ formData, setFormData }) {
  const [reserveRespons, setReserveRespons] = useState(0);

  const reservationData = {
    area: formData.campsite,
    amount: formData.ticketAmount,
  };

  const putReservationData = JSON.stringify(reservationData);
  console.log(putReservationData);
  const ENDPOINT_URL = import.meta.env.VITE_FAELLESTIVAL_RESERVE_SPOT;

  console.log("Putting area data", ENDPOINT_URL);

  useEffect(() => {
    // PUT request using fetch inside useEffect React hook
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: putReservationData,
    };
    fetch(ENDPOINT_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => setReserveRespons(data));
  }, []);
  console.log(reserveRespons);
  let userKey = reserveRespons[1];
  setFormData({ ...formData, authKey: userKey });
}

export default ReservationRequest;
