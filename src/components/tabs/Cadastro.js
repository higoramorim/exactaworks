import React from 'react';
import Form from '../Form';
import Input from '../Input';

const Cadastro = (props) => {
  return (
    <Form onSubmit={console.log}>
      <h1>Dados pessoais</h1>

      <Input label="Número do RG" onChange={() => {}}/>
    </Form>
  )
}

export default Cadastro;