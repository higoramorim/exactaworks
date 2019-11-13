import React from 'react';
import Tabs from './Tabs';

const Wizard = ({ items }) => {
  return (
    <div className="wizard">
      <div className="wizard__header">
        <Tabs items={items} onClick={console.log} progressive/>
      </div>

      <div className="wizard__body">
        {items.find(item => item.active).content}
      </div>
    </div>
  )
}

export default Wizard;