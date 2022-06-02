import React from "react";

function Creditcard() {
  // CODE MAY BE RELEVANT AT PRODUCTION :)
  ////////////////////////////////////////

  //   var owner = $("#owner");
  //   var cardNumber = $("#cardNumber");
  //   var cardNumberField = $("#card-number-field");
  //   var CVV = $("#cvv");
  //   var mastercard = $("#mastercard");
  //   var confirmButton = $("#confirm-purchase");
  //   var visa = $("#visa");
  //   var amex = $("#amex");

  //   // Use the payform library to format and validate
  //   // the payment fields.

  //   cardNumber.payform("formatCardNumber");
  //   CVV.payform("formatCardCVC");

  //   cardNumber.keyup(function () {
  //     amex.removeClass("transparent");
  //     visa.removeClass("transparent");
  //     mastercard.removeClass("transparent");

  //     if ($.payform.validateCardNumber(cardNumber.val()) == false) {
  //       cardNumberField.addClass("has-error");
  //     } else {
  //       cardNumberField.removeClass("has-error");
  //       cardNumberField.addClass("has-success");
  //     }

  //     if ($.payform.parseCardType(cardNumber.val()) == "visa") {
  //       mastercard.addClass("transparent");
  //       amex.addClass("transparent");
  //     } else if ($.payform.parseCardType(cardNumber.val()) == "amex") {
  //       mastercard.addClass("transparent");
  //       visa.addClass("transparent");
  //     } else if ($.payform.parseCardType(cardNumber.val()) == "mastercard") {
  //       amex.addClass("transparent");
  //       visa.addClass("transparent");
  //     }
  //   });

  //   confirmButton.click(function (e) {
  //     e.preventDefault();

  //     var isCardValid = $.payform.validateCardNumber(cardNumber.val());
  //     var isCvvValid = $.payform.validateCardCVC(CVV.val());

  //     if (owner.val().length < 5) {
  //       alert("Wrong owner name");
  //     } else if (!isCardValid) {
  //       alert("Wrong card number");
  //     } else if (!isCvvValid) {
  //       alert("Wrong CVV");
  //     } else {
  //       // Everything is correct. Add your form submission code here.
  //       alert("Everything is correct");
  //     }
  //   });

  return (
    <div class="creditCardForm">
      <h3 className="creditCardInfo">Fill your Credit Card Info</h3>
      <div class="payment">
        <form>
          <div class="form-group owner">
            <label for="owner">Owner</label>
            <input type="text" class="form-control" id="owner" />
          </div>
          <div class="form-group CVV">
            <label for="cvv">CVV</label>
            <input type="text" class="form-control" id="cvv" />
          </div>
          <div class="form-group" id="card-number-field">
            <label for="cardNumber">Card Number</label>
            <input type="text" class="form-control" id="cardNumber" />
          </div>
          <div class="form-group" id="expiration-date">
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
          <div class="form-group" id="credit_cards">
            <img src="/visa.jpg" id="visa" alt="visa" />
            <img src="/mastercard.jpg" id="mastercard" alt="mastercard" />
            <img src="/amex.jpg" id="amex" alt="amex" />
          </div>
          {/* <div class="form-group" id="pay-now">
            <button type="submit" class="btn btn-default" id="confirm-purchase">
              Confirm
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Creditcard;
