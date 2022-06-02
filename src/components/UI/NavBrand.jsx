import React from "react";
import Logo from "./Logo";
import Link from "./Link";

function NavBrand(props) {
  function goToMain() {
    props.setIsLogin(false);
    props.setShowTicketsPage(false);
    props.setShowLineup(false);
    props.setShowLandPage(true);
    props.setShowFaqPage(false);
    props.setShowProgramPage(false);
    props.setShowFestLandPage(false);
    props.setShowMapPage(false);
    window.location = "#";
    console.log("go to main");
  }
  return (
    
    <div className={props.container}>
      <Logo className={props.logoClassName} id={props.id} />

      <Link
        content={props.content}
        className={props.className}
        action={goToMain}
      />
    </div>
  );
}

export default NavBrand;
