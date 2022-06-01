import React, { useState } from "react";

function TicketCheckout({ formData, setFormData }) {
  const [checkoutValues, setCheckoutValues] = useState([
    { id: 1, typeName: "Ticket Price" },
  ]);

  useEffect(() => {}, []);

  //   return (
  //     <div className="ticket-checkout-container">
  //       <div className="ticket-checkout-header">
  //         <h2>Checkout</h2>
  //       </div>
  //       <div className="ticket-checkout-body">
  //         <div className="ticket-checkout-info">
  //           <span>
  //             * Whooop, you're almost there! Please confirm your purchase
  //           </span>
  //         </div>
  //         <div className="ticket-checkout--ticket-type" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-duration" value={id.price}></div>
  //         <div className="ticket-checkout--ticket-amount" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-cardfee" value={id.price}></div>
  //         <div className="ticket-checkout--ticket-luxepack" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-greencamp" value={id.price}></div>
  //         <div className="ticket-checkout--ticket-total" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-type" value={id.price}></div>
  //         <div className="ticket-checkout--ticket-duration" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-amount" value={id.price}></div>
  //         <div className="ticket-checkout--ticket-cardfee" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-luxepack" value={id.price}></div>
  //         <div className="ticket-checkout--ticket-greencamp" value={id.typeName}></div>
  //         <div className="ticket-checkout--ticket-total" value={id.price}></div>
  //       </div>
  //       ;
  //     </div>
  //   );
}

export default TicketCheckout;

// userEmail: "",
// userPassword: "",
// confirmPassword: false,
// firstName: "",
// lastName: "",
// userName: "",
// checkoutTotal: "",
// authKey: "",
// ticketType: "",
// ticketDuration: "",
// ticketDay: "",
// agreeTerms: "",
// agreeSocial: "",
// ticketAmount: 0,
// cardFee: 99,
// campsite: "",
// tentSetup: 0,
// luxePack: 0,
// greenCamp: 0,
// faellesCard: 0,
// extraGuests: [],
