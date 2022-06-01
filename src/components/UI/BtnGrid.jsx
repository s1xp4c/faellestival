import React from "react";
import Btn from "./Btn";

function BtnGrid(props) {
  return (
    <div className={props.className} id={props.id}>
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
      {props.btn3content && (
        <Btn
          content={props.btn3content}
          action={props.btn3action}
          className={props.btn3className}
        />
      )}
    </div>
  );
}

export default BtnGrid;
