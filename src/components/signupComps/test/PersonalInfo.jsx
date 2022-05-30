import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Guest e-mail..."
        value={formData.userEmail}
        onChange={(e) => {
          setFormData({ ...formData, userEmail: e.target.value });
        }}
      />
      <input
        type="number"
        className="numberInput"
        placeholder="Guest Age..."
        value={formData.userAge}
        onChange={(e) => {
          setFormData({ ...formData, userAge: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
