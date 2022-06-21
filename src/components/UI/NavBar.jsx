import React, { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import Btn from "./Btn";
import NavBrand from "./NavBrand.jsx";
import BtnGrid from "../UI/BtnGrid.jsx";
// import { stringify } from "uuid";

function NavBar(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  function goToLineup() {
    props.setShowLineup(true);
    props.setShowTicketsPage(false);
    props.setShowLandPage(false);
    window.location = "#";
  }
  function goToFestApp() {
    props.setShowLogin(true);
    window.location = "#";
  }

  function openBurger() {
    // console.log("openburger");
    props.showBurgerMenu
      ? props.setShowBurgerMenu(false)
      : props.setShowBurgerMenu(true);
    window.location = "#";
  }
  function goToTicketsPage() {
    props.setShowLineup(false);
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    // console.log("gototickets");
    window.location = "#";
  }

  const user = props.guestName;
  // let user = props.name;

  return (
    <nav className={props.className} id={props.id}>
      {props.showLandPage ||
      props.showFestLandPage ||
      props.showLineup ||
      props.showTicketsPage ||
      props.showArtistPage ? (
        []
      ) : (
        <NavBrand
          setIsLogin={setIsLogin}
          {...props}
          setShowLandPage={props.setShowLandPage}
          {...props}
          logoClassName="navLogo"
          className="navTitle"
          content="Faellestival"
          container="regBrand"
        />
      )}

      {props.showFestLandPage ? (
        <NavBrand
          setIsLogin={setIsLogin}
          {...props}
          setShowLandPage={props.setShowLandPage}
          {...props}
          container="landingNav"
          logoClassName="navLogo"
          className="navTitle"
          content="Faellestival"
        />
      ) : (
        []
      )}

      {props.showLineup || props.showTicketsPage || props.showArtistPage ? (
        <NavBrand
          setIsLogin={setIsLogin}
          {...props}
          setShowLandPage={props.setShowLandPage}
          {...props}
          container="regBrand"
          className="navTitle"
          logoClassName="navLogo"
          content="Faellestival"
        />
      ) : (
        []
      )}

      {props.showTicketsPage && (
        <BtnGrid
          className="regbtnGrid"
          btn1action={goToLineup}
          btn1content="Line Up"
          btn1className="secBtn"
          btn2action={goToFestApp}
          btn2content="Fest App"
          btn2className="secBtn"
          btn3content="☰"
          btn3action={openBurger}
          btn3className="burgerBtn"
        />
      )}

      {props.showLineup && (
        <BtnGrid
          className="regbtnGrid"
          btn1action={goToFestApp}
          btn1content="Fest App"
          btn1className="secBtn"
          btn2action={goToTicketsPage}
          btn2content="Tickets"
          btn2className="secBtn"
          btn3content="☰"
          btn3action={openBurger}
          btn3className="burgerBtn"
        />
      )}
      {props.showLandPage && (
        <Btn
          action={goToFestApp}
          content="Fest App"
          className="primBtn"
          id="festApp"
        />
      )}
      {props.showLandPage && (
        <Btn content="☰" action={openBurger} className="burgerBtn" />
      )}
      {isLogin && (
        <BtnGrid
          btn1action={openBurger}
          btn1content={user.charAt(0).toUpperCase() + user.slice(1)}
          btn1className="name"
          id="userInfo"
          btn2content="☰"
          btn2action={openBurger}
          btn2className="festburgerBtn"
        />
      )}
    </nav>
  );
}

export default NavBar;
