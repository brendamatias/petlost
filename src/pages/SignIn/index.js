import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/petlost.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>acesse sua conta</h3>

        <label htmlFor="email">e-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <label htmlForm="password">senha</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <Link to="/forgot-password" className="forgot">
          esqueceu sua senha?
        </Link>

        <button type="submit">{loading ? 'carregando...' : 'entrar'}</button>
        <Link to="/register">não tem conta? criar uma conta</Link>
      </Form>

      <span>©‎2020 PetLost - Brasil</span>
    </>
  );
}
