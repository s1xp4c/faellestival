import React from "react";
import mapSpots from "/mapSpots.svg";
import Title from "./UI/Title";
import ProgramTable from "./sections/ProgramTable";
import MainSect from "./sections/MainSect";

function ProgramPage(props) {
  function goToFestPage() {
    props.setShowProgramPage(false);
    props.setShowFestLandPage(true);
    window.location = "#";
  }
  return (
    <section>
      <MainSect
        bcFest="Main"
        className="programHeader"
        content="Program"
        action={goToFestPage}
      />
      <section className="list">
        {/* <Title content="Program" className="title" /> */}
        <ProgramTable />
      </section>
    </section>
  );
}

export default ProgramPage;
