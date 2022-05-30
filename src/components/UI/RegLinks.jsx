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
  }
  function goTofestAppPage() {
    console.log("go to festAppPage");
    setIsLogin(true);
  }
  function goToTicketsPage() {
    props.setShowTicketsPage(true);
    props.setShowLineup(false);
    props.setShowLandPage(false);
    props.setShowFaqPage(false);
    console.log("tickets");
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
