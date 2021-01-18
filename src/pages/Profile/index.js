import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <h1>My Profile</h1>

      <Form initialData={profile} onSubmit={handleSubmit}>
        <div>
          <AvatarInput name="avatar_id" />

          <div>
            <strong>{profile.name}</strong>
            <p>{profile.email}</p>
          </div>
        </div>

        <label htmlFor="name">Full Name</label>
        <Input name="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" />

        <hr />

        <label htmlFor="email">Your current password</label>
        <Input name="oldPassword" />

        <label htmlFor="email">New Password</label>
        <Input name="password" />

        <label htmlFor="email">Password Confirmation</label>
        <Input name="confirmPassword" />

        <button type="submit">Update profile</button>
      </Form>
    </Container>
  );
}
