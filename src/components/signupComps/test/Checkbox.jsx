import React from "react";

function Checkbox({ option, name, isSelected, index }) {
  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={name}
          checked={isSelected}
          className="form-check-input"
          key={index}
        />
        {option}
      </label>
    </div>
  );
}
export default Checkbox;
