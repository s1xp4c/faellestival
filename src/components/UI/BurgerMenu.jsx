import React from "react";
import FestLinks from "./FestLinks";
import RegLinks from "./RegLinks";

function BurgerMenu(props) {
  return (
    <div className={props.className}>
      {props.isLogin ? (
        <FestLinks globalClassName="burgerLinks" />
      ) : (
        <RegLinks globalClassName="burgerLinks" />
      )}
    </div>
  );
}

export default BurgerMenu;
