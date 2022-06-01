import React from "react";
import FaqGrid from "./sections/FaqGrid";
import MainSect from "./sections/MainSect";

function FaqPage(props) {
  function goToMain() {
    props.setShowLandPage(true);
    props.setShowFaqPage(false);
    window.location = "#";
  }
  return (
    <div>
      <MainSect content="FAQ Questions" bcReg="Main" action={goToMain} />
      <FaqGrid />
    </div>
  );
}

export default FaqPage;
