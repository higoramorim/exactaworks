import React, { Component } from 'react';
import '../styles/app.scss';

import Header from './Header';
import InfoSection from './InfoSection';
import { FormattedMessage } from 'react-intl';

const items = [
  { title: <FormattedMessage id="como_funciona" />, path: '/' },
  { title: <FormattedMessage id="privacidade" />, path: '/' },
  { title: <FormattedMessage id="ajuda" />, path: '/' },
]

const widgets = []

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: [
        {
          label: <FormattedMessage id="me_chamo" />,
          content: 'Paul Irish',
          details: {
            label: <FormattedMessage id="cpf" />,
            content: '762.568.176.92'
          }
        },
        {
          label: <FormattedMessage id="preciso_de" />,
          content: 'R$2.000',
        },
        {
          label:  <FormattedMessage id="quero_parcelar_em" />,
          content: '12 vezes',
        },
        {
          label:  <FormattedMessage id="Para" />,
          content: 'Comprar uma bike',
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header items={items} />
        <InfoSection widgets={this.state.widgets} />
      </div>
    )
  }
}

export default App;