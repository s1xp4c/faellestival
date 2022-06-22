import React from "react";
import Logo from "./Logo";
import Link from "./Link";

function NavBrand(props) {
  function goToMain() {
    props.setShowLandPage(true);
    props.setIsLogin(false);
    if (props.showFestLandPage) {
      props.setShowFestLandPage(false);
      props.setShowLineup(false);
      props.setShowProgramPage(false);
      props.setShowMapPage(false);
    } else if (props.showLandPage) {
      props.setShowFaqPage(false);
      props.setShowTicketsPage(false);
      props.setShowFestLandPage(false);
      props.setShowLineup(false);
    }

    window.location = "#";
    // console.log("go to main");
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
