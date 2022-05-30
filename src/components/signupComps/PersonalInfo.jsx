import React, { useState, useEffect } from "react";

function PersonalInfo({ formData, setFormData }) {
  const n = formData.ticketAmount;

  console.log(n);
  console.log(formData);

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
