import React from 'react';

const Label = ({ value, children }) => {
  return (
    <label className="label">
      {value || children}
    </label>
  )
}

export default Label;