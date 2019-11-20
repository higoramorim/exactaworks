import React from 'react';
import classnames from 'classnames';

import Label from './Label';

const Input = (props) => {
  const {
    name,
    id,
    value,
    invalid,
    label,
    onChange,
    onBlur,
    disabled,
    items = [],
  } = props;

  const classes = classnames({
    input: true,
    'input--invalid': invalid,
  });

  return (
    <div className={classes}>
      <select
        className="input__element"
        name={name}
        id={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="" selected disabled>Selecione uma opção</option>
        {items.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
      <Label value={label} inputId={id}/>
    </div>
  )
}

export default Input;