import React, { useState, useEffect } from "react";
import TicketCheckout from "./TicketCheckout";

function PushAllData({ formData, setFormData }) {
  const [serverRespons, setServerRespons] = useState([]);

  const fullfillID = {
    id: formData.authKey,
  };

  const dataForRestDB = {
    id: formData.authKey,
    firstName: formData.firstName,
    lastName: formData.lastName,
    userEmail: formData.userEmail,
    userName: formData.userName,
    ticketType: formData.ticketType,
    ticketDuration: formData.ticketDuration,
    ticketDay: formData.ticketDay,
    ticketAmount: formData.ticketAmount,
    campsite: formData.campsite,
    extraGuests: formData.extraGuests,
  };

  // const postFullfillData = JSON.stringify(fullfillID);
  // console.log(postFullfillData);

  const FAELLESTIVAL_FULFILL_URL = import.meta.env
    .VITE_FAELLESTIVAL_FULFILL_RESERVATION;
  const FAELLESTIVAL_RESTDB_URL = import.meta.env.VITE_FAEL_SEC_RESTDB_URL;
  const FAELLESTIVAL_RESTDB_KEY = import.meta.env.VITE_FAEL_SEC_RESTDB_KEY;

  ////////////////////////////////////////////////////////////////////

  console.log("Pushing ticket ID", FAELLESTIVAL_FULFILL_URL);

  useEffect(() => {
    const postFullfillData = JSON.stringify(fullfillID);
    // POST request using fetch inside useEffect React hook
    const pushIdRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: postFullfillData,
    };
    const fullfillIt = async () => {
      await fetch(FAELLESTIVAL_FULFILL_URL, pushIdRequestOptions)
        .then((response) => response.json())
        .then(
          (data) => setServerRespons(data),
          (data) => console.log(data)
        );
    };
    fullfillIt().catch(console.error());
  }, []);

  // console.log(serverRespons);

  let ticketMessage = serverRespons.message;
  useEffect(() => {
    setFormData({ ...formData, ticketState: ticketMessage });
  }, []);

  //////////////////////////////////////////////////////////////////////

  // const postALLData = JSON.stringify(dataForRestDB);

  console.log("Pushing ALL data to RestDB", FAELLESTIVAL_RESTDB_URL);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const postALLData = JSON.stringify(dataForRestDB);
    const pushAllDataRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": FAELLESTIVAL_RESTDB_KEY,
        "cache-control": "no-cache",
      },
      body: postALLData,
    };

    const postIt = async () => {
      await fetch(FAELLESTIVAL_RESTDB_URL, pushAllDataRequestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
    postIt().catch(console.error());
  }, []);

  return (
    <div className="congratulations-container">
      <div className="loginInfo">
        <div className="congratulations-header">
          <h3>WuHuuuuuu {dataForRestDB.extraGuests[0].firstName}!! </h3>
        </div>
        <div className="congratulations-body">
          <div className="congratulations-info">
            <span>*This is your info</span>
          </div>
          <div className="user-info"></div>
          <div>
            <span>*Use this Booking number to login to the Fest App</span>
          </div>
          <div>
            <span>Booking number: </span>
            {" --> "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {dataForRestDB.id}
            </span>
          </div>
        </div>
        <TicketCheckout formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

export default PushAllData;
