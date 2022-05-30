import React, { useState } from "react";
import Btn from "../UI/Btn";

function MapSection(props) {
  function goToMap() {
    props.setShowFestLandPage(false);
    props.setShowProgramPage(true);
  }
  return (
    <section className={props.className}>
      Map image Here
      <Btn
        content={props.content}
        className={props.btnClassName}
        action={goToMap}
      />
    </section>
  );
}

export default MapSection;
