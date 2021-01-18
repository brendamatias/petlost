import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/petlost.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é necessário para cadastro.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('E-mail é necessário para cadastro.'),
  password: Yup.string()
    .min(6, 'At least 6 characters.')
    .required('Senha é necessário para cadastro.'),
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
        <h3>Create your account</h3>

        <label htmlFor="name">Nome completo</label>
        <Input name="name" type="text" placeholder="Nome Exemplo" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <label htmlFor="password">Senha</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <button type="submit">Registrar</button>
        <Link to="/">Já tem uma conta? Por favor, faça seu login.</Link>
      </Form>

      <span>©‎2020 PetLost Studio - Brasil</span>
    </>
  );
}
