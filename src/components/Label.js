import React from 'react';

const Label = ({ value, inputId, children }) => {
  return (
    <label className="label" for={inputId}>
      {value || children}
    </label>
  )
}

export default Label;