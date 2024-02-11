import React, { useState } from 'react';

function ToggleButton({ label, name, onToggle }) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    onToggle(!isActive);
  };

  return (
    <div className={`togglebutton-wrapper ${isActive ? "togglebutton-checked" : ""}`}>
      <label htmlFor={name}>
        <span className="togglebutton-label">{label}</span>
        <span className="tooglebutton-box"></span>
      </label>
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={isActive}
        onChange={handleToggle}
      />
    </div>
  );
}

export default ToggleButton;