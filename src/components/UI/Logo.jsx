import React from "react";
import logo from "/logo-big.png";

function Logo(props) {
  return <img className={props.className} src={logo} alt="Logo" />;
}

export default Logo;
