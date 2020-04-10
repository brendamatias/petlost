import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/petlost.svg';

export default function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form onSubmit={handleSubmit}>
        <h3>Log into your account</h3>

        <label htmlFor="email">Email Address</label>
        <Input name="email" type="email" placeholder="example@mail.com" />

        <label htmlForm="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          className="password"
        />
        <span>Forgot Password?</span>

        <button type="submit">Log in</button>
        <Link to="/register">Dont have an account? Create an account</Link>
      </Form>

      <span>©‎2020 PetLost Studio - Brazil</span>
    </>
  );
}
