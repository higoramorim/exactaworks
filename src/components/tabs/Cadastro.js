import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Form from '../Form';
import Input from '../Input';
import RadioGroup from '../RadioGroup';
import GenderEnum from '../../enums/gender';

const Cadastro = (props) => {
  const [state, setState] = useState({
    rg: '',
    data_emissao: '',
    orgao_expeditor: '',
    sexo: '',
  });

  const updateValue = (data) => setState((state) => ({ ...state, ...data }));

  return (
    <Form title={<FormattedMessage id="dados_pessoais" />} onSubmit={console.log}>
      <div className="row">
        <Input
          label={<FormattedMessage id="numero_do_rg" />}
          onChange={({ target }) => updateValue({ rg: target.value })}
        />
        <Input
          label={<FormattedMessage id="data_de_emissao" />}
          value={state.data_emissao}
          onChange={({ target }) => updateValue({ data_emissao: target.value })}
        />
        <Input
          label={<FormattedMessage id="orgao_expeditor" />}
          value={state.orgao_expeditor}
          onChange={({ target }) => updateValue({ orgao_expeditor: target.value })}
        />
      </div>

      <div className="row">
        <RadioGroup
          label={<FormattedMessage id="sexo" />}
          items={GenderEnum.toList()}
          onChange={value => updateValue({ orgao_expeditor: value })}
        />
      </div>
    </Form>
  )
}

export default Cadastro;