import React from 'react';
import InfoWidget from './InfoWidget';

const InfoSection = ({ widgets, children }) => {
  return (
    <section className="info-section">
      <div className="info-section__container">
        {
          widgets
            ? widgets.map(widget => <InfoWidget {...widget} />)
            : children
        }
      </div>
    </section>
  )
}

export default InfoSection;