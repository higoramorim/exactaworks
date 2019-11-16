import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Header from './Header';
import HomePage from '../pages/HomePage';
import CadastroPage from '../pages/CadastroPage';

import '../styles/app.scss';

const App = props => {
  const [state, setState] = useState({
    routes: [
      { label: <FormattedMessage id="home" />, path: '/' },
      { label: <FormattedMessage id="novo_cadastro" />, path: '/cadastro' },
      // { label: <FormattedMessage id="como_funciona" />, path: '/' },
      // { label: <FormattedMessage id="privacidade" />, path: '/' },
      // { label: <FormattedMessage id="ajuda" />, path: '/'},
    ],
  });

  return (
    <div className="App">
      <Router>
        <Header items={state.routes} />
        <Route path="/" exact render={() => <HomePage/>}/>
        <Route path="/cadastro" exact render={() => <CadastroPage/>}/>
      </Router>
    </div>
  );
}

export default App;