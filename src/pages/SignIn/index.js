import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      {/* <img src={logo} alt="GoBarber" /> */}

      <form>
        <h3>Log into your account</h3>

        <label>Email Address</label>
        <input type="email" placeholder="example@mail.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" className="password" />
        <span>Forgot Password?</span>

        <button type="submit">Log in</button>
        <Link to="/register">Dont have an account? Create an account</Link>
      </form>

      <span>©‎2020 PetLost Studio - Brazil</span>
    </>
  );
}
