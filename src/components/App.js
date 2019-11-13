import React, { Component } from 'react';
import '../styles/app.scss';

import Header from './Header';
import InfoSection from './InfoSection';
import Wizard from './Wizard';

import { FormattedMessage } from 'react-intl';

const items = [
  { label: <FormattedMessage id="como_funciona" />, path: '/' },
  { label: <FormattedMessage id="privacidade" />, path: '/' },
  { label: <FormattedMessage id="ajuda" />, path: '/' },
];

const tabs = [
  { 
    label: <FormattedMessage id="simule" />,
    content: (<h1>Vrau na diagonal</h1>),
  },
  {
    label: <FormattedMessage id="preencha_o_cadastro" />,
    content: (<h1>Vrau na diagonal</h1>),
    active: true,
  },
  {
    label: <FormattedMessage id="revise_seu_pedido" />,
    content: (<h1>Vrau na diagonal</h1>),
  },
  {
    label: <FormattedMessage id="finalize_o_pedido" />,
    content: (<h1>Vrau na diagonal</h1>),
  },
]

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
          label:  <FormattedMessage id="para" />,
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
        <Wizard items={tabs}/>
      </div>
    )
  }
}

export default App;