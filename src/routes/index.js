import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';

import Dashboard from '~/pages/Dashboard';
import Messages from '~/pages/Messages';
import Profile from '~/pages/Profile';

import MyPets from '~/pages/MyPets';
import AddPets from '~/pages/MyPets/AddPets';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/messages" component={Messages} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/my-pets" exact component={MyPets} isPrivate />
      <Route path="/my-pets/add-pets" component={AddPets} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
