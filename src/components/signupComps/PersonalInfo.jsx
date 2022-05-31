import React, { useState, useEffect } from "react";

function PersonalInfo({
  formData,
  setFormData,
  reservationTime,
  setReservationTime,
}) {
  // const [reservationInfo, setReservationInfo] = useState({});
  const n = formData.ticketAmount;
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
    // PUT request using fetch inside useEffect hook
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: putReservationData,
    };
    fetch(ENDPOINT_URL, requestOptions)
      .then((response) => response.json())
      .then(
        (data) => setReserveRespons(data),
        (data) => console.log(data)
      );
  }, []);

  console.log(reserveRespons);
  console.log(reserveRespons.id);
  let userKey = reserveRespons.id;
  let userCountdown = reserveRespons.timeout;
  let userReserved = reserveRespons.message;
  useEffect(() => {
    console.log(reserveRespons.id);
    setFormData({ ...formData, authKey: userKey });
    setReservationTime({ reservationTime: userCountdown });
  }, []);

  const [guestArray, setGuestArray] = useState([]);

  useEffect(() => {
    setGuestArray(
      [...Array(n).keys()].map((d) => {
        return {
          id: d,
          firstName: "",
          lastName: "",
          email: "",
        };
      })
    );
  }, []);

  return (
    <div className="personal-info-container">
      {guestArray.map((d, index) => (
        <div key={index}>
          <input
            type="text"
            id={d.id}
            placeholder="Guest First Name..."
            value={d.firstName}
            onChange={(e) => {
              const nextGuests = guestArray.map((guest) => {
                if (d.id === guest.id) {
                  return { ...guest, firstName: e.target.value };
                }
                return guest;
              });
              setGuestArray(nextGuests);
              setFormData({
                ...formData,
                extraGuests: nextGuests,
                authKey: userKey,
              });
            }}
          ></input>
          <input
            type="text"
            id={d.id}
            placeholder="Guest Last Name..."
            value={d.lastName}
            onChange={(e) => {
              const nextGuests = guestArray.map((guest) => {
                if (d.id === guest.id) {
                  return { ...guest, lastName: e.target.value };
                }
                return guest;
              });
              setGuestArray(nextGuests);
              setFormData({
                ...formData,
                extraGuests: nextGuests,
              });
            }}
          ></input>
          <input
            type="text"
            id={d.id}
            placeholder="Guest E-mail Name..."
            value={d.email}
            onChange={(e) => {
              const nextGuests = guestArray.map((guest) => {
                if (d.id === guest.id) {
                  return { ...guest, email: e.target.value };
                }
                return guest;
              });
              setGuestArray(nextGuests);
              setFormData({
                ...formData,
                extraGuests: nextGuests,
              });
            }}
          ></input>
        </div>
      ))}
    </div>
  );
}

export default PersonalInfo;
