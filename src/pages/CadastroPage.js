import React, { useState } from 'react';

import InfoSection from '../components/InfoSection';
import Wizard from '../components/Wizard';
import Cadastro from '../components/tabs/Cadastro';

import { FormattedMessage } from 'react-intl';

const tabs = [
  { 
    label: <FormattedMessage id="simule" />,
    content: null,
    completed: true,
  },
  {
    label: <FormattedMessage id="preencha_o_cadastro" />,
    content: <Cadastro />,
    active: true,
  },
  {
    label: <FormattedMessage id="revise_seu_pedido" />,
    content: null,
    completed: false,
  },
  {
    label: <FormattedMessage id="finalize_o_pedido" />,
    content: null,
    completed: false,
  },
]

const CadastroPage = props => {
  const [state, setState] = useState({
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
    ],
  });

  return (
    <div>
      <InfoSection widgets={state.widgets} />
      <Wizard items={tabs}/>
    </div>
  )
}

export default CadastroPage;