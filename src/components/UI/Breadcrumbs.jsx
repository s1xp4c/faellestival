import React from "react";

function Breadcrumbs(props) {
  return (
    <button className={props.className} onClick={props.action}>
      {" "}
      « Back to {props.bc} Page
    </button>
  );
}

export default Breadcrumbs;
