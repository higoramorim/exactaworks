import React from 'react';
import '../styles/app.scss';

import Header from './Header';

const items = [
  { title: 'Como funciona', path: '/' },
  { title: 'Privacidade', path: '/' },
  { title: 'Ajuda', path: '/' },
]

const App = () => (
  <div className="App">
    <Header items={items}/>
  </div>
);

export default App;