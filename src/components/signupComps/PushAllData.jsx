import React, { useState, useEffect } from "react";

function PushAllData({ formData, setFormData }) {
  const [serverRespons, setServerRespons] = useState([]);
  const [populateRestDB, setPopulateRestDB] = useState([]);

  const fullfillID = {
    id: formData.authKey,
  };

  const postFullfillData = JSON.stringify(fullfillID);
  console.log(postFullfillData);

  const FAELLESTIVAL_FULLFILL_URL = import.meta.env
    .VITE_FAELLESTIVAL_FULLFILL_RESERVATION;
  const FAELLESTIVAL_RESTDB_URL = import.meta.env.VITE_FAELLESTIVAL_RESTDB_URL;
  const FAELLESTIVAL_RESTDB_KEY = import.meta.env.VITE_FAELLESTIVAL_RESTDB_KEY;

  ////////////////////////////////////////////////////////////////////

  console.log("Pushing ticket ID", FAELLESTIVAL_FULLFILL_URL);

  useEffect(() => {
    // PUT request using fetch inside useEffect React hook
    const pushIdRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: postFullfillData,
    };
    fetch(FAELLESTIVAL_FULLFILL_URL, pushIdRequestOptions)
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
    console.log(populateRestDB);
  }, []);

  //////////////////////////////////////////////////////////////////////

  //   const postALLData = JSON.stringify(formData);
  const postALLData = { ...formData };
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
        (data) => setPopulateRestDB(data),
        (data) => console.log(data)
      );
  }, []);

  return <div>CONGRATULATIONS!!</div>;
}

export default PushAllData;
