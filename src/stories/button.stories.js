import React from 'react';
import { storiesOf } from '@storybook/react';

import '../styles/app.scss';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('Variants', () => (
    <div>
      <div style={{display: 'flex'}}>
        <Button label="Default"/> &nbsp;
        <Button label="Disabled" disabled/>
      </div>

      <br/>

      <div style={{display: 'flex'}}>
        <Button label="Loading" loading/> &nbsp;
        <Button label="Disabled" disabled loading/>
      </div>
    </div>
  ));