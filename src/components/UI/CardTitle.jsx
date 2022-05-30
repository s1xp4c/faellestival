import React from "react";

function CardTitle(props) {
  return (
    <div className={props.className}>
      <p>{props.head}</p>
      {props.subHead && <p>{props.subHead}</p>}
    </div>
  );
}

export default CardTitle;
