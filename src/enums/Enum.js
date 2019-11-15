import React from 'react';
import { FormattedMessage } from 'react-intl';

export default data => ({
  ...data,
  toList() {
    return Object.keys(data).map(key => ({
      label: <FormattedMessage id={data[key]} />,
      value: key,
    }));
  }
});