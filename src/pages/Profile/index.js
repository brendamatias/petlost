import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    data.avatar = avatar;
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <h1>perfil</h1>

      <Form initialData={profile} onSubmit={handleSubmit}>
        <div>
          <AvatarInput
            name="avatar"
            avatar={profile.avatar_url}
            setAvatar={setAvatar}
          />

          <div>
            <strong>{profile.name}</strong>
            <p>{profile.email}</p>
          </div>
        </div>

        <label htmlFor="name">nome completo</label>
        <Input name="name" />

        <label htmlFor="email">e-mail</label>
        <Input name="email" />

        <hr />

        <label htmlFor="oldPassword">senha anterior</label>
        <Input name="oldPassword" type="password" />

        <label htmlFor="password">nova senha</label>
        <Input name="password" type="password" />

        <label htmlFor="confirmPassword">confirmação de senha</label>
        <Input name="confirmPassword" type="password" />

        <button type="submit">atualizar perfil</button>
      </Form>
    </Container>
  );
}
