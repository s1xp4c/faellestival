// import React, { useState, useEffect } from "react";

// import { v4 as uuidv4 } from "uuid";
import PersonalInfo from "./PersonalInfoTest";

function PersonalInfoHandler({
  formData,
  setFormData,
  index,
  extrasData,
  setExtrasData,
}) {
  // const [guestInfo, setGuestInfo] = useState([]);
  // const n = formData.ticketAmount;

  // useEffect(() => {
  //   let guestInfo = [
  //     {
  //       id: extrasData[n].id,
  //       firstName: extrasData[n].firstName,
  //       lastName: extrasData[n].firstName,
  //       email: extrasData[n].firstName,
  //       underage: extrasData[n].firstName,
  //       select: extrasData[n].firstName,
  //     },
  //   ];

  //   setGuestInfo(
  //     [...guestInfo(n)].map((i) => {
  //       return {
  //         key: i,
  //         id: i.id,
  //         firstName: i.firstName,
  //         lastName: i.lastName,
  //         underage: i.underage,
  //         select: i.select,
  //       };
  //     })
  //   );
  // }, []);

  // useEffect(() => {
  //   setExtrasData(
  //     extrasData.map((d, i) => {
  //       return {
  //         key: i,
  //         id: d.id,
  //         firstName: d.firstName,
  //         lastName: d.lastName,
  //         underage: d.underage,
  //         select: d.select,
  //       };
  //     })
  //   );
  //   setFormData.extraGuests = extrasData;
  // }, []);

  return (
    <PersonalInfo
      extrasData={extrasData}
      setExtrasData={setExtrasData}
      formData={formData}
    />
  );
}

export default PersonalInfoHandler;
