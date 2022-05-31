import React, { useContext } from "react";
import Link from "./Link";
import { LoginContext } from "../../Contexts/LoginContext";

function FestLinks(props) {
  const { setIsLogin } = useContext(LoginContext);

  function goToProgramPage() {
    props.setShowProgramPage(true);
    props.setShowFestLandPage(false);
    props.setShowArtistdPage(false);
    props.setShowFCardPage(false);
    props.setShowMapPage(false);
    console.log("go to programpage");
  }
  function goToArtistsPage() {
    props.setShowArtistdPage(true);
    props.setShowFestLandPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(false);
    props.setShowMapPage(false);
    console.log("go to artistprogrampage");
  }
  function goToMapPage() {
    props.setShowMapPage(true);
    props.setShowFestLandPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(false);
    props.setShowArtistdPage(false);
    console.log("go to artistprogrampage");
  }

  function goTomainPage() {
    console.log("go to mainpage");
    setIsLogin(false);
  }
  function goTofaellescardPage() {
    props.setShowFestLandPage(false);
    props.setShowArtistdPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(true);
    props.setShowMapPage(false);
    console.log("go to mainpage");
  }
  return (
    <ul className={props.globalClassName}>
      <Link className="link gradientTxt" content="Program" action={goToProgramPage} />
      <Link className="link gradientTxt" content="Artists" action={goToArtistsPage} />
      <Link className="link gradientTxt" content="Main Page" action={goTomainPage} />
      <Link className="link" content="Map" action={goToMapPage} />

      <Link
        className="link"
        content="Your Faelles Card"
        action={goTofaellescardPage}
      />
    </ul>
  );
}

export default FestLinks;
