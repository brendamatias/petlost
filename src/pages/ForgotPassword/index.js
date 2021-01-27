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
    setLoading(true);
    await api.post('/password/forgot', email);

    toast.success('Recovery email sent! Check your message box.');

    setLoading(false);
  }

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>Recuperar senha</h3>

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <button type="submit">{loading ? 'Carregando...' : 'Recuperar'}</button>
        <Link to="/register">Volte ao login</Link>
      </Form>

      <span>©‎2020 PetLost - Brasil</span>
    </>
  );
}
