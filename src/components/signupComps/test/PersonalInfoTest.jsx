import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

function PersonalInfo({ formData, extrasData, setExtrasData }) {
  const [guestInfo, setGuestInfo] = useState([]);
  const n = formData.ticketAmount;

  useEffect(() => {
    let guestInfo = [
      {
        id: extrasData[n].id,
        firstName: extrasData[n].firstName,
        lastName: extrasData[n].firstName,
        email: extrasData[n].firstName,
        underage: extrasData[n].firstName,
        select: extrasData[n].firstName,
      },
    ];

    setGuestInfo(
      [...guestInfo(n)].map((i) => {
        return {
          key: i,
          id: i.id,
          firstName: i.firstName,
          lastName: i.lastName,
          underage: i.underage,
          select: i.select,
        };
      })
    );
  }, []);

  return (
    <div className="personal-info-container">
      <div className="personal-info-header">
        <h3>Extra Guests info</h3>
        <p>*Here you type the info of your friends</p>
      </div>

      <div className="personal-info-body personal-info">
        <input
          type="text"
          placeholder="First Name..."
          id={i.id}
          value={i.firstName}
          onChange={(e) => {
            setGuestInfo({ ...guestInfo, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Last Name..."
          id={i.id}
          value={i.lastName}
          onChange={(e) => {
            setGuestInfo({ ...guestInfo, lastName: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Guest e-mail..."
          id={i.id}
          value={i.userEmail}
          onChange={(e) => {
            setGuestInfo({ ...guestInfo, userEmail: e.target.value });
          }}
        />
        <input
          type="checkbox"
          id={i.id}
          checked={i.select}
          value={i.value}
          onChange={(e) => {
            setGuestInfo({ ...guestInfo, userUnderage: e.target.checked });
          }}
        ></input>
      </div>
    </div>
  );
}

export default PersonalInfo;
