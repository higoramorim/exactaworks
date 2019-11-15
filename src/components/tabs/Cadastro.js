import React from 'react';
import Form from '../Form';
import Input from '../Input';

import { FormattedMessage } from 'react-intl';

const Cadastro = (props) => {
  return (
    <Form title={<FormattedMessage id="dados_pessoais" />} onSubmit={console.log}>
      <div className="row">
        <Input label={<FormattedMessage id="numero_do_rg" />} onChange={() => {}}/>
        <Input label={<FormattedMessage id="data_de_emissao" />} onChange={() => {}}/>
        <Input label={<FormattedMessage id="orgao_expeditor" />} onChange={() => {}}/>
      </div>

      <div className="row">
        
      </div>
    </Form>
  )
}

export default Cadastro;