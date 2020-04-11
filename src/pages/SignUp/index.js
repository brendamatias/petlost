import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/petlost.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'At least 6 characters.')
    .required('Password is required.'),
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

        <label htmlFor="name">Full Name</label>
        <Input name="name" type="text" placeholder="Example Name" />

        <label htmlFor="email">Email Address</label>
        <Input name="email" type="email" placeholder="example@mail.com" />

        <label htmlFor="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />

        <button type="submit">Register</button>
        <Link to="/">Already have an account? Please login.</Link>
      </Form>

      <span>©‎2020 PetLost Studio - Brazil</span>
    </>
  );
}
