import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { IntlProvider } from 'react-intl';
import pt_br from "./translations/pt-br.json";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <IntlProvider locale="pt-br" messages={pt_br}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
