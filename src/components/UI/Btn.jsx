import React from "react";

function Btn(props) {
  return (
    <button id={props.id}className={props.className} onClick={props.action}>
      {props.content}
      {props.children}
    </button>
  );
}

export default Btn;
