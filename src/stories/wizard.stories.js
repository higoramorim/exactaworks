import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../styles/app.scss';
import Wizard from '../components/Wizard';

storiesOf('Wizard', module)
  .add('Variants', () => {
    const tabs = [
      { label: 'Completed tab', content: null, completed: true, },
      { label: 'Active tab', content: null, active: true, },
      { label: 'Available tab', content: null },
    ];

    return (
      <Wizard items={tabs} />
    );
});