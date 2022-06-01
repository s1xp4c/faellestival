import React from "react";
import Btn from "../UI/Btn";
import FullLineup from "./FullLineup";
// import styles from "../../scss/sections/_lineup.scss";
// const styles = resolve('./')

function LineupSection(props) {
  function goToLineup() {
    console.log("work");
    props.setShowLandPage(false);
    props.setShowLineup(true);
  }
  return (
    <section className={props.className}>
      <FullLineup className="gradientTxt" />

      <Btn className="secBtn" content="See Day by Day" action={goToLineup} />
    </section>
  );
}

export default LineupSection;
