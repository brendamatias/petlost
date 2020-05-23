import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

import logo from '~/assets/petlost.svg';

import history from '~/services/history';
import { api } from '~/services/api';

const schema = Yup.object().shape({
  password: Yup.string().required('Password is required.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  async function handleSubmit({ password, confirmPassword }) {
    setLoading(true);

    const token = location.search.replace('?token=', '');

    if (!token) {
      toast.error('Token not valid!');
    }

    await api.put('/password/reset', {
      token,
      password,
      confirmPassword,
    });

    toast.success('Password updated successfully!');
    setLoading(false);
    history.push('/');
  }

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>Reset password</h3>

        <label htmlForm="password">New password</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <label htmlForm="password">Password confirmation</label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <button type="submit">{loading ? 'Loading...' : 'Recover'}</button>
      </Form>

      <span>©‎2020 PetLost Studio - Brazil</span>
    </>
  );
}
