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
      <h1>Perfil</h1>

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

        <label htmlFor="name">Nome Completo</label>
        <Input name="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" />

        <hr />

        <label htmlFor="oldPassword">Senha anterior</label>
        <Input name="oldPassword" type="password" />

        <label htmlFor="password">Nova senha</label>
        <Input name="password" type="password" />

        <label htmlFor="confirmPassword">Confirmação de senha</label>
        <Input name="confirmPassword" type="password" />

        <button type="submit">Atualizar perfil</button>
      </Form>
    </Container>
  );
}
