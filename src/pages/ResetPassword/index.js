import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

import logo from '~/assets/petlost.svg';

import history from '~/services/history';
import { api } from '~/services/api';

const schema = Yup.object().shape({
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas devem se corresponder'
  ),
});

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  async function handleSubmit({ password, confirmPassword }) {
    setLoading(true);

    const token = location.search.replace('?token=', '');

    if (!token) {
      setLoading(false);
      return toast.error('Token inválido!');
    }

    await api.put('/password/reset', {
      token,
      password,
      confirmPassword,
    });

    toast.success('Senha atualizada com sucesso!');
    return history.push('/');
  }

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>Redefinir senha</h3>

        <label htmlFor="password">Nova senha</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <label htmlFor="password">Confirmação de senha</label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Redefinir'}</button>
      </Form>

      <span>©‎2020 PetLost - Brasil</span>
    </>
  );
}
