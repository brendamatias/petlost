import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/petlost.svg';
import { api } from '~/services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
});

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ email }) {
    try {
      setLoading(true);
      await api.post('/password/forgot', { email });

      toast.success(
        'Email de recuperação enviado! Verifique sua caixa de mensagem.'
      );

      setLoading(false);
    } catch (err) {
      const { response } = err;

      toast.error(response.data.error?.message || 'Ocorreu um erro interno');
      setLoading(false);
    }
  }

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>recuperar senha</h3>

        <label htmlFor="email">e-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <button type="submit">{loading ? 'carregando...' : 'recuperar'}</button>
        <Link to="/register">volte ao login</Link>
      </Form>

      <span>©‎2020 PetLost - Brasil</span>
    </>
  );
}
