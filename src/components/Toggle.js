import React, { useState } from 'react';

const Toggle = ({ type, label, value, checked, name, onChange, disabled }) => {
  const [state, setState] = useState({ checked: Boolean(checked) });
  
  return (
    <label className="toggle" tabIndex="0" onKeyUp={
      (evt) => {
        if (evt.keyCode === 13 || evt.keyCode === 32) {
          onChange(evt);
        }
      }
    }>
      <input
        className="toggle__element"
        type={type}
        checked={state.checked}
        value={value}
        onChange={(evt) => {
          setState((state) => ({ checked: !state.checked }));
          onChange(evt);
        }}
        name={name}
        disabled={disabled}
      />
      
      <span className="toggle__target">
        {label}
      </span>
    </label>
  );
}

export default Toggle;