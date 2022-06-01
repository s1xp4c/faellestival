import React, { useState, useEffect } from "react";
import ReservationRequest from "./ReservationRequest";

function PersonalInfo({ formData, setFormData }) {
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

  console.log(reserveRespons.id);
  let userKey = reserveRespons.id;
  useEffect(() => {
    setFormData({ ...formData, authKey: userKey });
  }, []);

  // ReservationRequest(
  //   (formData = { formData }),
  //   (setFormData = { setFormData })
  // );
  // console.log(n);
  // console.log(formData);

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
            required
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

    // <div className="personal-info-container">
    //   <input
    //     type="text"
    //     placeholder="Guest First Name..."
    //     value={formData.firstName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, firstName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Guest Last Name..."
    //     value={formData.lastName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, lastName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Guest e-mail..."
    //     value={formData.userEmail}
    //     onChange={(e) => {
    //       setFormData({ ...formData, userEmail: e.target.value });
    //     }}
    //   />
    // </div>
  );
}

export default PersonalInfo;
