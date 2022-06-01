import React from "react";

function Controls(props) {
  function getDay(event) {
    props.setDay(event.target.value);
    window.location = "#";
  }

  return (
    <div className={props.className}>
      <select onChange={getDay}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
  );
}

export default Controls;
