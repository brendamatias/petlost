import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/petlost.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Nome é necessário para cadastro'),
  email: Yup.string()
    .trim()
    .email('Informe um e-mail válido')
    .required('E-mail é necessário para cadastro'),
  password: Yup.string()
    .trim()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .required('Senha é necessária para cadastro'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>crie sua conta</h3>

        <label htmlFor="name">nome completo</label>
        <Input name="name" type="text" placeholder="Nome Exemplo" />

        <label htmlFor="email">e-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <label htmlFor="password">senha</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <button type="submit">registrar</button>
        <Link to="/">já tem uma conta? por favor, faça seu login.</Link>
      </Form>

      <span>©‎2020 PetLost - Brasil</span>
    </>
  );
}
