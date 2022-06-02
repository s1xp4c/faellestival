import React from "react";
import Checkboxes from "./Checkboxes";

function CheckboxHandler(props) {
  OPTIONS = props.options;
  const [checkboxes, setCheckboxes] = useState({
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  });

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setCheckboxesChecked((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        // console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);
  return (
    <>
      <Checkboxes />
    </>
  );
}

export default CheckboxHandler;
