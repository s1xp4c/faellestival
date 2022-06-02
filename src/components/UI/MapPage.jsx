import React from "react";
import MainSect from "../sections/MainSect";
import mapSpots from "/mapSpots.svg";

function MapPage(props) {
  function goToFestPage() {
    props.setShowMapPage(false);
    props.setShowFestLandPage(true);
    window.location = "#";
  }
  return (
    <section>
      <MainSect
        bcFest="Main"
        className="mapHeader"
        content="Map"
        action={goToFestPage}
      />
      <div className="map">
        <img src={mapSpots} alt="map" />
      </div>
    </section>
  );
}

export default MapPage;
