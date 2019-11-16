import React from 'react';

import Label from './Label';
import Toggle from './Toggle';

const RadioGroup = ({ label, name, items = [], disabled, onChange }) => {
  return (
    <div className="radio-group">
      <Label value={label}/>

      {
        items.map(({ label, value, checked }, index) => (
          <Toggle
            key={index}
            type="radio"
            label={label}
            value={value}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
        ))
      }
    </div>
  );
}

export default RadioGroup;