import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/petlost.svg';

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="PetLost" />

      <Form onSubmit={handleSubmit}>
        <h3>Create your account</h3>

        <label htmlFor="name">Full Name</label>
        <Input name="name" type="email" placeholder="Example Name" />

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
