import React from 'react';
import Label from './Label';

const Input = (props) => {
  const {
    label,
    type = "text",
    onChange,
  } = props;

  return (
    <div class="input">
      <Label value={label}/>
      <input
        className="input__element"
        type={type}
        onChange={onChange}
      />
    </div>
  )
}

export default Input;