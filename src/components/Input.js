import React from 'react';
import classnames from 'classnames';

import Label from './Label';

const Input = (props) => {
  const {
    type = "text",
    label,
    value,
    invalid,
    onChange,
  } = props;

  const classes = classnames({
    input: true,
    'input--invalid': invalid,
  });

  return (
    <div className={classes}>
      <input
        className="input__element"
        // id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Label value={label}/>
      {/* <Label value={label} inputId={}/> */}
    </div>
  )
}

export default Input;