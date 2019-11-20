import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../styles/app.scss';
import Header from '../components/Header';

storiesOf('Header', module)
  .add('Variants', () => {
    const items = [
      { label: 'Item #1', path: '/' },
      { label: 'Item #2', path: '/' },
    ];

    return (
      <div>
        <Router>
          <Header items={items}/>
        </Router>
      </div>
    );
});