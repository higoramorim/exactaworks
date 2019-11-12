import React from 'react';
import classnames from 'classnames';

const InfoWidget = ({  label, content, details, inline }) => {
  const classes = classnames({
   ' info-widget': true,
    'info-widget--inline': inline !== undefined,
  });

  return (
    <div>
      <div className={classes}>
        <span className="info-widget__label">
          {label}:
        </span>
        <p className="info-widget__content">
          {content}
        </p>  
      </div>
      { details && <InfoWidget inline {...details}/> }
    </div>
  )
}

export default InfoWidget;