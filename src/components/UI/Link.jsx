import React from "react";

function Link(props) {
  return (
    <button className={props.className} onClick={props.action}>
      {props.content}
    </button>
  );
}

export default Link;
