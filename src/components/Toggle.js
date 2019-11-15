import React from 'react';

const Toggle = ({ type, label, value, checked, onChange }) => {
  return (
    <label class="toggle">
      <input
        className="toggle__element"
        type={type}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      
      <span className="toggle__target">
        {label}
      </span>
    </label>
  );
}

export default Toggle;