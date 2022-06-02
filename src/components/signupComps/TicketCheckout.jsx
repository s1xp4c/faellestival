import React, { useEffect } from "react";
import Creditcard from "./Creditcard";

function TicketCheckout({ formData, setFormData, page }) {
  console.log(" from ckecout", formData);

  let subtotal = 0;
  let dayAmount = 0;
  if (formData.ticketDuration == "Full Festival") {
    dayAmount = 7;
  } else if (formData.ticketDuration == "Weekend") {
    dayAmount = 3;
  } else {
    dayAmount = 1;
  }
  formData.ticketType == "VIP"
    ? (subtotal = formData.ticketAmount * 1299 * dayAmount)
    : (subtotal = formData.ticketAmount * 799 * dayAmount);

  let total =
    subtotal +
    formData.cardFee +
    formData.tentSetup +
    formData.luxePack +
    formData.greenCamp;

  useEffect(() => {
    let checkoutTotal =
      subtotal +
      formData.cardFee +
      formData.tentSetup +
      formData.luxePack +
      formData.greenCamp;
    setFormData({
      ...formData,
      checkoutTotal: checkoutTotal,
    });
  }, []);

  console.log(
    "dayAmount",
    dayAmount,
    "tickettype",
    formData.ticketType,
    "ticketDuration",
    formData.ticketDuration
  );

  return (
    <div className="ticket-checkout-container">
      <div className="ticket-checkout-header">
        { page == 5 ? <h2>Your Purchase</h2> : <h2>Checkout</h2>}
      </div>
      <Creditcard />
      <div className="ticket-checkout-body">
        <p className="subtotal">
          {formData.ticketAmount} x {formData.ticketDuration}{" "}
          {formData.ticketType}:{" "}
          <span className="checkoutSpan">{subtotal}kr.</span>{" "}
        </p>
        {formData.tentSetup > 1 && (
          <p className="addOnsTotal">
            Tent Setup Service:{" "}
            <span className="checkoutSpan">{formData.tentSetup}kr.</span>{" "}
          </p>
        )}
        {formData.luxePack > 1 && (
          <p className="addOnsTotal">
            Luxury Pack:{" "}
            <span className="checkoutSpan">{formData.luxePack}kr.</span>{" "}
          </p>
        )}
        {formData.greenCamp > 1 && (
          <p className="addOnsTotal">
            Green Camping:{" "}
            <span className="checkoutSpan">{formData.greenCamp}kr.</span>{" "}
          </p>
        )}
        <p className="fees">
          Card Fee: <span className="checkoutSpan">{formData.cardFee}kr.</span>
        </p>
        <p className="total">
          Total: <span className="totalSpan">{total}kr.</span>
        </p>
      </div>
    </div>
  );
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
