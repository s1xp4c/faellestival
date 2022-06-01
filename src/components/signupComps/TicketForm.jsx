import React, { useState, useEffect } from "react";
import ConfirmInfo from "./ConfirmInfo";
import TicketContent from "./TicketContent";
import PersonalInfo from "./PersonalInfo";
import ExtrasInfo from "./ExtrasInfo";
import CampInfo from "./CampInfo";
import TimeCount from "./TimeCount";
// import envData from "../../App";
// import ReservationRequest from "./ReservationRequest";

function TicketForm(props) {
  const [page, setPage] = useState(0);
  //  const [reservationTime, setReservationTime] = useState();
  const reservationTime = 300000;

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    confirmPassword: false,
    firstName: "",
    lastName: "",
    userName: "",
    checkoutTotal: "",
    authKey: "",
    ticketType: "",
    ticketDuration: "",
    ticketDay: "",
    agreeTerms: "",
    agreeSocial: "",
    ticketAmount: 0,
    cardFee: 99,
    campsite: "",
    tentSetup: 0,
    luxePack: 0,
    greenCamp: 0,
    faellesCard: 0,
    extraGuests: [],
  });

  const FormTitles = [
    "Select Tickets",
    "Choose Campsite",
    "Personal Info",
    "Choose Extras",
    "Confirm Your E-mail",
    "Checkout Cart",
  ];
  const checkboxLabels = [
    "Standard Ticket",
    "VIP Ticket",
    "One Day",
    "Weekend",
    "Full Festival",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Merch Pack",
    "Tent Setup",
    "Agree to Terms",
    "Agree to Membership",
    "Helheim",
    "Svartheim",
    "Nilfheim",
    "Muspelheim",
    "Alfheim",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <TicketContent
          ticketType={props.ticketType}
          checkboxLabels={checkboxLabels}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <CampInfo
          formData={formData}
          setFormData={setFormData}
          checkboxLabels={checkboxLabels}
        />
      );
    } else if (page === 2) {
      return (
        <>
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            // reservationTime={reservationTime}
            // setReservationTime={setReservationTime}
          />
        </>
      );
    } else if (page === 3) {
      return <ExtrasInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return (
        <ConfirmInfo
          formData={formData}
          setFormData={setFormData}
          checkboxLabels={checkboxLabels}
        />
      );
    } else if (page === 5) {
      return <TicketCheckout formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="ticket-form draw">
      <div className="progressbar transition-ease">
        <div
          className="transition-ease"
          style={{
            width:
              page === 0
                ? "16.6%"
                : page == 1
                ? "33.3%"
                : page == 2
                ? "50%"
                : page == 3
                ? "66.6%"
                : page == 4
                ? "83.3%"
                : "100%",
          }}
        ></div>
        {/* <div className="countdown-timer">
          <TimeCount reservationTime={reservationTime} />
        </div> */}
      </div>
      <div className="form-container ">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="countdown-timer">
          <TimeCount
            reservationTime={reservationTime}
            setPage={setPage}
            PageDisplay={PageDisplay}
          />
        </div>
        <div className="body ">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketForm;
