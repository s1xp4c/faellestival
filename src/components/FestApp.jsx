import React, { useState, useContext } from "react";
import Footer from "./Footer";
import NavBar from "./UI/NavBar";
import FestLandPage from "./FestLandPage";
import ArtistPage from "./ArtistPage";
import ProgramPage from "./ProgramPage";
import FaellesCardPage from "./FaellesCardPage";
import BurgerMenu from "./UI/BurgerMenu";
// import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext";
// import { AvailableContext } from "../Contexts/AvailableContext.js";
// import { ScheduleContext } from "../Contexts/ScheduleContext.js";

function FestApp(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const [showFestLandPage, setShowFestLandPage] = useState(true);
  const [showArtistPage, setShowArtistPage] = useState(false);
  const [showProgramPage, setShowProgramPage] = useState(false);
  const [showFCardPage, setShowFCardPage] = useState(false);
  const [pickedId, setPickedId] = useState([]);

  return (
    <>
      <NavBar
        {...props}
        setShowFestLandPage={setShowFestLandPage}
        setShowArtistPage={setShowArtistPage}
        setShowProgramPage={setShowProgramPage}
        className="festNavBar"
        showFestLandPage={showFestLandPage}
        shoArtistdPage={showArtistPage}
        showProgramPage={showProgramPage}
      />
      {props.showBurgerMenu && (
        <BurgerMenu
          {...props}
          setShowFestLandPage={setShowFestLandPage}
          setShoArtistdPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          className="burgerMenu"
          showFestLandPage={showFestLandPage}
          shoArtistdPage={showArtistPage}
          showProgramPage={showProgramPage}
        />
      )}

      {showFestLandPage && (
        <FestLandPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowFCardPage={setShowFCardPage}
          pickedId={pickedId}
          setPickedId={setPickedId}
        />
      )}
      {showArtistPage && (
        <ArtistPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          pickedId={pickedId}
          setPickedId={setPickedId}
        />
      )}
      {showProgramPage && (
        <ProgramPage
          setShowFestLandPage={setShowFestLandPage}
          setShowProgramPage={setShowProgramPage}
        />
      )}
      {showFCardPage && (
        <FaellesCardPage
          setShowFestLandPage={setShowFestLandPage}
          setShowFCardPage={setShowFCardPage}
        />
      )}
      <Footer
        setShowFestLandPage={setShowFestLandPage}
        setShowArtistdPage={setShowArtistPage}
        setShowProgramPage={setShowProgramPage}
        setShowFCardPage={setShowFCardPage}
      />
    </>
  );
}

export default FestApp;
