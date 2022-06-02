import React from "react";
import FestLinks from "./FestLinks";
import RegLinks from "./RegLinks";

function BurgerMenu(props) {
  return (
    <div className={props.className} id={props.id}>
      {props.isLogin || props.showFestLandPage || props.showArtistPage || props.showProgramPage? (
        <FestLinks globalClassName="burgerLinks" />
      ) : []}

      {props.showLandPage || props.showTicketsPage ||props.showLineup  ?
        (
          <RegLinks {...props} globalClassName="burgerLinks" />
        ): [] }
      
    </div>
  );
}

export default BurgerMenu;
