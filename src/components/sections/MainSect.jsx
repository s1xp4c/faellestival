import React from "react";
import Breadcrumbs from "../UI/Breadcrumbs";
import HeaderBg from "../HeaderBg";
import MainTitle from "../UI/MainTitle";

function MainSect(props) {
  return (
    <section className={props.className}>
      {props.bcReg && (
        <Breadcrumbs
          className="breadCrumbs faqback"
          bc={props.bcReg}
          action={props.action}
        />
      )}
      {props.bcFest && (
        <Breadcrumbs
          className="gobackProgram"
          bc={props.bcFest}
          action={props.action}
        />
      )}
      <HeaderBg className="heroBg" />
      <MainTitle className="mainTitle" content={props.content} />
    </section>
  );
}

export default MainSect;
