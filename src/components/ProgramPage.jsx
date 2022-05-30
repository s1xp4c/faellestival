import React from "react";
import mapSpots from "/mapSpots.svg";
import Title from "./UI/Title";
import ProgramTable from "./sections/ProgramTable";

function ProgramPage(props) {
  return (
    <section>
      <div className="map">
        <img src={mapSpots} alt="map" />
      </div>
      <section>
        <Title content="Program" className="title" />
        <ProgramTable />
      </section>
    </section>
  );
}

export default ProgramPage;
