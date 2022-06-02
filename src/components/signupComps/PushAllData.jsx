import React, { useState, useEffect } from "react";

function PushAllData({ formData, setFormData }) {
  const [serverRespons, setServerRespons] = useState([]);
  // const [populateRestDB, setPopulateRestDB] = useState([]);

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

  const postFullfillData = JSON.stringify(fullfillID);
  console.log(postFullfillData);

  const FAELLESTIVAL_FULFILL_URL = import.meta.env
    .VITE_FAELLESTIVAL_FULFILL_RESERVATION;
  const FAELLESTIVAL_RESTDB_URL = import.meta.env.VITE_FAEL_SEC_RESTDB_URL;
  const FAELLESTIVAL_RESTDB_KEY = import.meta.env.VITE_FAEL_SEC_RESTDB_KEY;

  ////////////////////////////////////////////////////////////////////

  console.log("Pushing ticket ID", FAELLESTIVAL_FULFILL_URL);

  useEffect(() => {
    // PUT request using fetch inside useEffect React hook
    const pushIdRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: postFullfillData,
    };
    fetch(FAELLESTIVAL_FULFILL_URL, pushIdRequestOptions)
      .then((response) => response.json())
      .then(
        (data) => setServerRespons(data),
        (data) => console.log(data)
      )
      .catch(console.error());
  }, []);

  console.log(serverRespons);

  let ticketMessage = serverRespons.message;
  useEffect(() => {
    setFormData({ ...formData, ticketState: ticketMessage });
    // console.log(populateRestDB);
  }, []);

  //////////////////////////////////////////////////////////////////////

  const postALLData = JSON.stringify(dataForRestDB);
  // const postALLData = { ...formData };
  console.log(postALLData);

  console.log("Pushing ALL data to RestDB", FAELLESTIVAL_RESTDB_URL);

  useEffect(() => {
    // PUT request using fetch inside useEffect React hook
    const pushAllDataRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": FAELLESTIVAL_RESTDB_KEY,
        "cache-control": "no-cache",
      },
      body: postALLData,
    };
    fetch(FAELLESTIVAL_RESTDB_URL, pushAllDataRequestOptions)
      .then((response) => response.json())
      .then(
        // (data) => setPopulateRestDB(data),
        (data) => console.log(data)
      );
  }, []);

  return (
    <div className="congratulations-container">
      <div className="congratulations-header">
        <h3>CONGRATULATIONS!!</h3>
      </div>
      <div className="congratulations-body">
        <div className="congratulations-info">
          <span>*Here you see the info you submitted</span>
        </div>
        <div className="userName">
          <span>Username: </span>
        </div>
        <div className="userName-db">{dataForRestDB.userName}</div>
        <div className="firstName">
          <span>Firstname: </span>
        </div>
        <div className="firstName-db">{dataForRestDB.firstName}</div>
        <div className="lastName">
          <span>Lastname: </span>
        </div>
        <div className="lastName-db">{dataForRestDB.lastName}</div>
        <div className="userEmail">
          <span>Email: </span>
        </div>
        <div className="userEmail-db">{dataForRestDB.userEmail}</div>
        <div className="id">
          <span>Password</span>
        </div>
        <div className="id-db">{dataForRestDB.id}</div>
        <div className="ticketType">
          <span>Ticket Type: </span>
        </div>
        <div className="ticketType-db">{dataForRestDB.ticketType}</div>
        <div className="ticketDuration">
          <span>Duration: </span>
        </div>
        <div className="ticketDuration-db">{dataForRestDB.ticketDuration}</div>
        <div className="ticketDay">
          <span>Attendance Day: </span>
        </div>
        <div className="ticketDay-db">{dataForRestDB.ticketDay}</div>
        <div className="ticketAmount">
          <span>People Going: </span>
        </div>
        <div className="ticketAmount-db">{dataForRestDB.ticketAmount}</div>
        <div className="campsite">
          <span>Camping Area: </span>
        </div>
        <div className="campsite-db">{dataForRestDB.campsite}</div>
      </div>
    </div>
  );
}

export default PushAllData;
