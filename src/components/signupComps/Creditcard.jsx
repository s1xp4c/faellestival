import React from "react";

function Creditcard() {
  return (
    <div class="creditCardForm">
      <h3 className="creditCardInfo">Fill your Credit Card Info</h3>
      <div class="payment">
        <form>
          <div className="form-group owner">
            <label htmlFor="owner">Owner</label>
            <input type="text" className="form-control" id="owner" required />
          </div>
          <div className="form-group CVV">
            <label htmlFor="cvv">CVV</label>
            <input type="number" className="form-control" id="cvv" required />
          </div>
          <div className="form-group" id="card-number-field">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="number"
              className="form-control"
              id="cardNumber"
              required
            />
          </div>
          <div className="form-group" id="expiration-date" required>
            <label>Expiration Date</label>
            <select>
              <option value="01">January</option>
              <option value="02">February </option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select>
              <option value="16"> 2022</option>
              <option value="17"> 2023</option>
              <option value="18"> 2024</option>
              <option value="19"> 2025</option>
              <option value="20"> 2026</option>
              <option value="21"> 2027</option>
            </select>
          </div>
          <div className="form-group" id="credit_cards">
            <img src="/visa.jpg" id="visa" alt="visa" />
            <img src="/mastercard.jpg" id="mastercard" alt="mastercard" />
            <img src="/amex.jpg" id="amex" alt="amex"/>
          </div>
          {/* <div className="form-group" id="pay-now">
            <button type="submit" className="btn btn-default" id="confirm-purchase">
              Confirm
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Creditcard;
