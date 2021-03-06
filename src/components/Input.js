import React from 'react';
import classnames from 'classnames';
import MaskedInput from 'react-text-mask'

import Label from './Label';

const Input = (props) => {
  const {
    type = 'text',
    mask = [],
    name,
    id,
    label,
    value,
    invalid,
    onKeyUp,
    onBlur,
    disabled,
  } = props;

  const classes = classnames({
    input: true,
    'input--invalid': invalid,
  });

  return (
    <div className={classes}>
      <MaskedInput
        mask={mask}
        className="input__element"
        guide={false}
        name={name}
        id={id}
        type={type}
        value={value}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        disabled={disabled}
      />
      <Label value={label} inputId={id}/>
    </div>
  )
}

export default Input;