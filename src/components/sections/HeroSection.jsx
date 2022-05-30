import React from "react";
import Header from "./Header";
import TimeTick from "../UI/TimeTick";
import Title from "../UI/Title";
import BtnGrid from "../UI/BtnGrid";
import ScrollElm from "./ScrollElm";

function HeroSection(props) {
  function showLineup() {
    console.log("showlineup");
    props.setShowLineup(true);
    props.setShowLandPage(false);
  }
  function showTickets() {
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    console.log("showtickets");
  }
  return (
    <section className={props.className}>
      <Header className="header" />
      <TimeTick />
      <Title className="heroTxt" content="25 - 31 of July • Stenstrup" />
      <BtnGrid
        {...props}
        btn1action={showLineup}
        btn1content="Line Up"
        btn2action={showTickets}
        btn2content="Tickets"
        className="btnGrid"
        btn1className="secBtn"
        btn2className="secBtn"
      />
      <ScrollElm className="scrollElm down" />
    </section>
  );
}

export default HeroSection;
