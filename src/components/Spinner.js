import React from 'react';
import classnames from 'classnames';

const Spinner = ({ large }) => {
  const classes = classnames({
    spinner: true,
    'spinner--large': large,
  });

  return (
    <svg className={classes} viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  );
}

export default Spinner;