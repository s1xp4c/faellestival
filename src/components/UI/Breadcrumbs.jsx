import React from "react";

function Breadcrumbs(props) {
  return (
    <p className={props.className} onClick={props.action}>
      {" "}
      « Back to {props.bc} Page
    </p>
  );
}

export default Breadcrumbs;
