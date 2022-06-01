import React, { useContext } from "react";
import Link from "./Link";
import { LoginContext } from "../../Contexts/LoginContext";

function FestLinks(props) {
  const { setIsLogin } = useContext(LoginContext);

  function goToProgramPage() {
    props.setShowProgramPage(true);
    props.setShowFestLandPage(false);
    props.setShowFCardPage(false);
    props.setShowMapPage(false);
    window.location = "#";
    console.log("go to programpage");
  }

  function goToMapPage() {
    props.setShowMapPage(true);
    props.setShowFestLandPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(false);
    window.location = "#";
    console.log("go to artistprogrampage");
  }

  function goTomainPage() {
    console.log("go to mainpage");
    setIsLogin(false);
    window.location = "#";
  }
  function goTofaellescardPage() {
    props.setShowFestLandPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(true);
    props.setShowMapPage(false);
    console.log("go to mainpage");
    window.location = "#";
  }
  return (
    <ul className={props.globalClassName}>
      <Link
        className="link gradientTxt"
        content="Program"
        action={goToProgramPage}
      />
      <Link
        className="link gradientTxt"
        content="Main Page"
        action={goTomainPage}
      />
      <Link className="link" content="Map" action={goToMapPage} />
    </ul>
  );
}

export default FestLinks;
