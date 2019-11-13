import React from 'react';
import classnames from 'classnames';

const Tabs = ({ items, onClick, progressive }) => {
  return (
    <ul className="tabs">
      {
        items.map((item, index) => {
          const classes = classnames({
            tab: true,
            'tab--active': item.active,
          });

          return (
            <li
              key={index}
              className={classes}
              onClick={() => onClick(item)}
            >
              {
                progressive &&
                <span className="tab__number">
                  {index + 1}
                </span>
              }
    
              <div className="tab__content">
                {item.label}
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Tabs;