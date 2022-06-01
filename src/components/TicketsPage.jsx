import React, { useState, useContext } from "react";
import { TicketsContext } from "../Contexts/TicketsContext";
import { AvailableContext } from "../Contexts/AvailableContext";
import MainSect from "./sections/MainSect";
import CardGrid from "./UI/CardGrid";
import OrderForm from "./sections/OrderForm";
//  import ticketContent from "./content.json?raw";

function TicketsPage(props) {
  const ticketsData = useContext(AvailableContext);
  const ticketsContent = useContext(TicketsContext);
  const [showForm, setShowForm] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  //check if there is tickets available
  const initialValue = 0;
  let sum = ticketsData.reduce(
    (previousValue, currentValue) => previousValue + currentValue.available,
    initialValue
  );
  sum == 0 ? setSoldOut(true) : "";

  function goToMain() {
    props.setShowTicketsPage(false);
    props.setShowLandPage(true);
    window.location = "#";
  }

  return (
    <main>
      {showForm ? (
        []
      ) : (
        <>
          <MainSect
            className="mainSect"
            content="Tickets"
            bcReg="Main"
            action={goToMain}
            {...props}
          />
          <CardGrid
            className="cardGrid hidden"
            ticketsContent={ticketsContent}
            setShowForm={setShowForm}
            soldOut={soldOut}
          />
        </>
      )}

      {showForm && <OrderForm setShowForm={setShowForm} />}
    </main>
  );
}

export default TicketsPage;
