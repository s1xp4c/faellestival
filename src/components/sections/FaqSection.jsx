import React from "react";
import SectionTitle from "../UI/SectionTitle";
import BtnGrid from "../UI/BtnGrid";

function FaqSection(props) {
  function showFaq() {
    console.log("show faq");
    props.setShowFaqPage(true);
    props.setShowLandPage(false);
  }
  function showTickets() {
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    console.log("showtickets");
  }
  return (
    <section className={props.className}>
      <SectionTitle content="Are you gonna Miss It?" />
      <BtnGrid
        {...props}
        className="btnGrid"
        btn1className="secBtn"
        btn2className="primBtn"
        btn1action={showFaq}
        btn1content="FAQ"
        btn2action={showTickets}
        btn2content="Get Your Tickets"
      />
    </section>
  );
}

export default FaqSection;
