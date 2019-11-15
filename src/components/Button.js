import React from 'react';
import classnames from 'classnames';

import Spinner from './Spinner';

const Button = props => {
  const classes = classnames({
    btn: true,
    'btn--success': props.success,
  })

  return (
    <button
      className={classes}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
    >
      {props.loading && <Spinner/>}
      {props.label || props.children}
    </button>
  );
};

export default Button;