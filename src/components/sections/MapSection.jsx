import React, { useState } from "react";
import Btn from "../UI/Btn";
import onlyMap from "/onlyMap.svg";

function MapSection(props) {
  function goToMap() {
    props.setShowFestLandPage(false);
    props.setShowMapPage(true);
  }
  return (
    <section className={props.className}>
      <div className="only-map">
        <img src={onlyMap} alt="map" />
      </div>
      <Btn
        content={props.content}
        className={props.btnClassName}
        action={goToMap}
      />
    </section>
  );
}

export default MapSection;
