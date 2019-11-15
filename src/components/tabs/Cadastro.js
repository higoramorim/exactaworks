import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import RadioGroup from '../RadioGroup';
import GenderEnum from '../../enums/gender';

const Cadastro = (props) => {
  const [state, setState] = useState({
    data: {
      rg: '',
      data_emissao: '',
      // orgao_expeditor: '',
      // sexo: '',
    },
    initial_interaction: true,
    is_invalid: true,
    invalid_fields: {
      rg: false,
      data_emissao: false,
      // orgao_expeditor: false,
      // sexo: false,
    }
  });

  const getInvalidFields = ({ data }) => Object
    .keys(data)
    .map(key => ({ [key]: data[key] === '' }))
    .reduce((fields, obj) => ({ ...fields, ...obj }), {});

  const validate = ({ invalid_fields }) => Object
    .keys(invalid_fields)
    .filter(key => invalid_fields[key] === true)
    .length > 0;
  
  const updateValue = (data) => {
    setState((state) => ({
      ...state,
      data: {
        ...state.data,
        ...data,
      },
      initial_interaction: false,
      invalid_fields: getInvalidFields(state),
    }));

    setState(state => ({ ...state, is_invalid: validate(state) }));
  };

  return (
    <Form title={<FormattedMessage id="dados_pessoais" />} onSubmit={console.log}>
      <div className="row">
        <Input
          label={<FormattedMessage id="numero_do_rg" />}
          onChange={({ target }) => updateValue({ rg: target.value })}
          onBlur={({ target }) => updateValue({ rg: target.value })}
          mask={[/[0-9]/,/[0-9]/,'.',/[0-9]/,/[0-9]/,/[0-9]/,'.',/[0-9]/,/[0-9]/,/[0-9]/,'-',/[0-9]/]}
          id="numero_do_rg"
          invalid={state.invalid_fields.rg}
          name="numero_do_rg"
        />
        <Input
          label={<FormattedMessage id="data_de_emissao" />}
          value={state.data_emissao}
          mask={[/[0-9]/,/[0-9]/,'/',/[0-9]/,/[0-9]/,'/',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]}
          onChange={({ target }) => updateValue({ data_emissao: target.value })}
          onBlur={({ target }) => updateValue({ data_emissao: target.value })}
          id="data_emissao"
          invalid={state.invalid_fields.data_emissao}
          name="data_emissao"
        />
        <Input
          label={<FormattedMessage id="orgao_expeditor" />}
          value={state.orgao_expeditor}
          onChange={({ target }) => updateValue({ orgao_expeditor: target.value })}
          onBlur={({ target }) => updateValue({ orgao_expeditor: target.value })}
          id="orgao_expeditor"
          invalid={state.invalid_fields.orgao_expeditor}
        />
      </div>

      <div className="row">
        <RadioGroup
          label={<FormattedMessage id="sexo" />}
          items={GenderEnum.toList()}
          name="sexo"
          onChange={value => updateValue({ orgao_expeditor: value })}
          invalid={state.invalid_fields.sexo}
        />
      </div>

      <div className="row">
        <Button
          type="submit"
          disabled={state.is_invalid}
        >
          Continuar ‣
        </Button>
      </div>
    </Form>
  )
}

export default Cadastro;