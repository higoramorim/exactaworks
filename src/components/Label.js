import React from 'react';

const Label = ({ value, inputId, children }) => {
  return (
    <label className="label" htmlFor={inputId}>
      {value || children}
    </label>
  )
}

export default Label;