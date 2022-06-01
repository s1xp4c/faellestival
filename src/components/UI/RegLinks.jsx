import React, { useContext } from "react";
import Link from "./Link";
import { LoginContext } from "../../Contexts/LoginContext";

function RegLinks(props) {
  const { setIsLogin } = useContext(LoginContext);

  function goToLineupPage() {
    props.setShowTicketsPage(false);
    props.setShowLineup(true);
    props.setShowLandPage(false);
    props.setShowFaqPage(false);
    console.log("go to lineuppage");
    window.location = "#";
  }
  function goTofestAppPage() {
    console.log("go to festAppPage");
    props.setShowLogin(true);
    window.location = "#";
  }
  function goToTicketsPage() {
    props.setShowTicketsPage(true);
    props.setShowLineup(false);
    props.setShowLandPage(false);
    props.setShowFaqPage(false);
    console.log("tickets");
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
