import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../styles/app.scss';
import InfoSection from '../components/InfoSection';

storiesOf('InfoSection', module)
  .add('Variants', () => {
    const widgets = [
      { label: 'Widget #1', content: 'Value' },
      { label: 'Widget #2', content: 'Value' },
      { label: 'Widget #3', content: 'Value' },
      { label: 'Widget #4', content: 'Value' },
    ];

    return (
      <InfoSection widgets={widgets} />
    );
});