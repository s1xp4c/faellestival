import React from "react";
import Btn from "./Btn";

function BtnGrid(props) {
  return (
    <div className={props.className}>
      <Btn
        content={props.btn1content}
        action={props.btn1action}
        className={props.btn1className}
      />
      {props.btn2content && (
        <Btn
          content={props.btn2content}
          action={props.btn2action}
          className={props.btn2className}
        />
      )}
    </div>
  );
}

export default BtnGrid;
