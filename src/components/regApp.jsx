import React, { useContext, useState } from "react";
// import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext";

// import { TicketsContext } from "../Contexts/TicketsContext.js";
// import { ScheduleContext } from "../Contexts/ScheduleContext.js";
// import { ScheduleContext } from "../Contexts/ScheduleContext.js";
import NavBar from "./UI/NavBar";
import LandingPage from "./LandingPage";
import LineupPage from "./LineupPage";
import TicketsPage from "./TicketsPage";
import Footer from "./Footer";
import FaqPage from "./FaqPage";
import BurgerMenu from "./UI/BurgerMenu";
import LoginSection from "./sections/LoginSection";
import ProgramPage from "./ProgramPage";

function RegApp(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  // const scheduleData = useContext(ScheduleContext);
  // const bandsData = useContext(BandsContext);
  const [showLineup, setShowLineup] = useState(false);
  const [showLandPage, setShowLandPage] = useState(true);
  const [showTicketsPage, setShowTicketsPage] = useState(false);
  const [showFaqPage, setShowFaqPage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProgramPage, setShowProgramPage] = useState(false);

  return (
    <>
      {showLandPage ? (
        <NavBar
          {...props}
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowLogin={setShowLogin}
          className="regNavBar"
          showLandPage={showLandPage}
          showTicketsPage={showTicketsPage}
          showLineup={showLineup}
        />
      ) : (
        <NavBar
          {...props}
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowLogin={setShowLogin}
          className="regNav"
          showLandPage={showLandPage}
          showTicketsPage={showTicketsPage}
          showLineup={showLineup}
          showLogin={showLogin}
        />
      )}

      {/* const [showBurgerMenu, setShowBurgerMenu] = useState(false); */}
      {showLogin && (
        <LoginSection
          setShowLogin={setShowLogin}
          guestName={props.guestName}
          setGuestName={props.setGuestName}
        />
      )}
      {props.showBurgerMenu && (
        <BurgerMenu
          {...props}
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          className="mobileBurgerMenu"
          showLandPage={showLandPage}
          showTicketsPage={showTicketsPage}
          showLineup={showLineup}
        />
      )}
      {showLandPage && (
        <LandingPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowFaqPage={setShowFaqPage}
        />
      )}
      {showLineup && (
        <LineupPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
        />
      )}
      {showTicketsPage && (
        <TicketsPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
        />
      )}
      {/* {<<<<<<< who-is-playing-now} */}
      {showFaqPage && (
        <FaqPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowFaqPage={setShowFaqPage}
        />
      )}
      {showProgramPage && (
        <ProgramPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowFaqPage={setShowFaqPage}
          setShowProgramPage={setShowProgramPage}
        />
      )}

      <Footer
        setShowTicketsPage={setShowTicketsPage}
        setShowLineup={setShowLineup}
        setShowLandPage={setShowLandPage}
        setShowFaqPage={setShowFaqPage}
        setShowLogin={setShowLogin}
        setShowProgramPage={setShowProgramPage}
      />
    </>
  );
}

export default RegApp;
