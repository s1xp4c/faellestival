import React from "react";
import Logo from "./Logo";
import Link from "./Link";

function NavBrand(props) {
  function goToMain() {
    console.log("go to main");
  }
  return (
    <>
      <Logo className={props.logoClassName} />
      <Link
        content={props.content}
        className={props.className}
        action={goToMain}
      />
    </>
  );
}

export default NavBrand;
