import React, { useContext } from "react";
import Link from "./Link";
import { LoginContext } from "../../Contexts/LoginContext";

function RegLinks(props) {
  const { setIsLogin } = useContext(LoginContext);

  function goToLineupPage() {
    props.setShowLineup(true);

props.showBurgerMenu ?   props.setShowBurgerMenu(false)  :  [] 
props.setShowTicketsPage(false)
    props.setShowLandPage(false);
    props.setShowFaqPage(false);
    props.setShowProgramPage(false);
    console.log("go to lineuppage");
    window.location = "#";
  }
  function goTofestAppPage() {
    console.log("go to festAppPage");
    props.setShowLogin(true);
   props.showBurgerMenu ?   props.setShowBurgerMenu(false)  :  [] 
    window.location = "#";
  }
  function goToTicketsPage() {
    props.setShowTicketsPage(true);
    props.showBurgerMenu ?   props.setShowBurgerMenu(false)  :  [] 

    props.setShowLineup(false);
    props.setShowLandPage(false);
    props.setShowFaqPage(false);
    console.log("tickets");
    props.setShowProgramPage(false);
    window.location = "#";
  }

  return (
    <ul className={props.globalClassName}>
      <Link className="link" content="Tickets" action={goToTicketsPage} />
      <Link className="link" content="LineUp" action={goToLineupPage} />
      <Link className="link" content="Festival App" action={goTofestAppPage} />
    </ul>
  );
}

export default RegLinks;
