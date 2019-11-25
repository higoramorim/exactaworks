import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import Select from '../Select';
import RadioGroup from '../RadioGroup';
import GenderEnum from '../../enums/gender';
import moment from 'moment';
import Http from '../../services/Http';

const Cadastro = (props) => {
  const [state, setState] = useState({
    // loading: true,
    data: {
      rg: '',
      data_emissao: '',
      orgao_expeditor: '',
      sexo: '',
    },
    entities: [
      { label: 'Teste #1', value: 'M' },
      { label: 'Teste #2', value: 'F' },
    ],
    initial_interaction: true,
    is_invalid: true,
    invalid_fields: {
      rg: false,
      data_emissao: false,
      orgao_expeditor: false,
      sexo: false,
    },
  });

  // useEffect(() => {
  //   async function fetchEntities() {
  //     Http
  //       .get('orgaos.json')
  //       .then(({ orgao_emissor }) => {
  //         setState((state) => ({
  //           ...state,
  //           loading: false,
  //           entities: orgao_emissor,
  //         }));
  //       })
  //       .catch(console.log);
  //   }

  //   fetchEntities();
  // });
  
  const getInvalidFields = ({ data }) => Object
    .keys(data)
    .map(key => {
      if (key === 'data_emissao') {
        const date = moment(data[key], 'DD/MM/YYYY');
        const isDateInvalid = (data[key].length < 10)
          ? true
          : !date.isValid() || date.isAfter(moment());
        
        return { [key]: isDateInvalid };
      }

      if(key === 'rg') {
        return { [key]: data[key].length < 12 };
      }

      return { [key]: data[key] === '' };
    })
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
          value={state.data.rg}
          onKeyUp={({ target }) => updateValue({ rg: target.value })}
          onBlur={({ target }) => updateValue({ rg: target.value })}
          mask={[/[0-9]/,/[0-9]/,'.',/[0-9]/,/[0-9]/,/[0-9]/,'.',/[0-9]/,/[0-9]/,/[0-9]/,'-',/[0-9]/]}
          id="numero_do_rg"
          invalid={state.invalid_fields.rg}
          disabled={state.loading}
          name="numero_do_rg"
        />
        <Input
          label={<FormattedMessage id="data_de_emissao" />}
          value={state.data.data_emissao}
          mask={[/[0-9]/,/[0-9]/,'/',/[0-9]/,/[0-9]/,'/',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]}
          onKeyUp={({ target }) => updateValue({ data_emissao: target.value })}
          onBlur={({ target }) => updateValue({ data_emissao: target.value })}
          id="data_emissao"
          invalid={state.invalid_fields.data_emissao}
          disabled={state.loading}
          name="data_emissao"
        />
        <Select
          label={<FormattedMessage id="orgao_expeditor" />}
          items={state.entities}
          value={state.data.orgao_expeditor}
          onChange={({ target }) => updateValue({ orgao_expeditor: target.value })}
          id="orgao_expeditor"
          invalid={state.invalid_fields.orgao_expeditor}
        />
      </div>

      <div className="row">
        <RadioGroup
          label={<FormattedMessage id="sexo" />}
          items={GenderEnum.toList()}
          name="sexo"
          disabled={state.loading}
          onChange={({ target }) => updateValue({ sexo: target.value })}
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