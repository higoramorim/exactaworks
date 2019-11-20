import React from 'react';
import { storiesOf } from '@storybook/react';

import '../styles/app.scss';
import Spinner from '../components/Spinner';

storiesOf('Spinner', module)
  .add('Variants', () => (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Spinner large/> &nbsp;
        <Spinner/>
      </div>
    </div>
  ));