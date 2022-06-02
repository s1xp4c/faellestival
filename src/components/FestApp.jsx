import React, { useState, useContext } from "react";
import Footer from "./Footer";
import NavBar from "./UI/NavBar";
import FestLandPage from "./FestLandPage";
import ArtistPage from "./ArtistPage";
import ProgramPage from "./ProgramPage";
import FaellesCardPage from "./FaellesCardPage";
import BurgerMenu from "./UI/BurgerMenu";
import MapPage from "./UI/MapPage";
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
  const [showMapPage, setShowMapPage] = useState(false);

  return (
    <>
      <NavBar
        {...props}
        setShowFestLandPage={setShowFestLandPage}
        setShowArtistPage={setShowArtistPage}
        setShowProgramPage={setShowProgramPage}
        setShowMapPage={setShowMapPage}
        className="festNavBar"
        showFestLandPage={showFestLandPage}
        showArtistPage={showArtistPage}
        showProgramPage={showProgramPage}
        ShowMapPage={showMapPage}
      />
      {props.showBurgerMenu && (
        <BurgerMenu
          {...props}
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowMapPage={setShowMapPage}
          className="burgerMenu"
          showFestLandPage={showFestLandPage}
          showArtistPage={showArtistPage}
          showProgramPage={showProgramPage}
          showMapPage={showMapPage}
        />
      )}

      {showFestLandPage && (
        <FestLandPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowFCardPage={setShowFCardPage}
          setShowMapPage={setShowMapPage}
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
      {showMapPage && (
        <MapPage
          setShowFestLandPage={setShowFestLandPage}
          setShowMapPage={setShowMapPage}
        />
      )}
      {showFCardPage && (
        <FaellesCardPage
          setShowFestLandPage={setShowFestLandPage}
          setShowFCardPage={setShowFCardPage}
        />
      )}

      {showMapPage ? (
        <Footer
          className="mapFooter"
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistdPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowFCardPage={setShowFCardPage}
          setShowMapPage={setShowMapPage}
        />
      ) : (
        <Footer
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistdPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowFCardPage={setShowFCardPage}
          setShowMapPage={setShowMapPage}
        />
      )}
    </>
  );
}

export default FestApp;
