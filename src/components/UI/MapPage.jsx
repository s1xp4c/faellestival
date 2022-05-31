import React from "react";
import MainSect from "../sections/MainSect";
import mapSpots from "/mapSpots.svg";

function MapPage(props) {
  return (
    <section>
      <MainSect bcFest="Main" className="mapHeader" content="Map" />
      <div className="map">
        <img src={mapSpots} alt="map" />
      </div>
    </section>
  );
}

export default MapPage;
