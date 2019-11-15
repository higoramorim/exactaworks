import React from 'react';

import Label from './Label';
import Toggle from './Toggle';

const RadioGroup = ({ label, items = [], onChange }) => {
  return (
    <div class="radio-group">
      <Label value={label}/>

      {
        items.map(({ label, value }) => (
          <Toggle
            type="radio"
            label={label}
            value={value}
            onChange={onChange}
          />
        ))
      }
    </div>
  );
}

export default RadioGroup;