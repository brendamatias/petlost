import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/petlost.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="PetLost" />

      <form>
        <h3>Create your account</h3>

        <label>Full Name</label>
        <input type="email" placeholder="Example Name" />

        <label>Email Address</label>
        <input type="email" placeholder="example@mail.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" className="password" />

        <button type="submit">Register</button>
        <Link to="/">Already have an account? Please login.</Link>
      </form>

      <span>©‎2020 PetLost Studio - Brazil</span>
    </>
  );
}
