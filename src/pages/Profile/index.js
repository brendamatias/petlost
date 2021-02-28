import * as Yup from 'yup';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ImageInput from '~/components/ImageInput';

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Nome é necessário para atualização de perfil'),
  email: Yup.string()
    .trim()
    .email('Informe um e-mail válido')
    .required('E-mail é necessário para atualização de perfil'),
  oldPassword: Yup.string().trim(),
  password: Yup.string()
    .trim()
    .when('oldPassword', (oldPasswordV, field) =>
      oldPasswordV ? field.required('A senha é obrigatória') : field
    ),
  confirmPassword: Yup.string()
    .trim()
    .when('password', (passwordV, field) =>
      passwordV
        ? field
            .required('A confirmação de senha é obrigatória')
            .oneOf([Yup.ref('password')], 'As senhas devem se corresponder')
        : field
    ),
});

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

      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <div>
          <ImageInput
            name="avatar"
            image={profile.avatar_url}
            setImage={setAvatar}
          />

          <div>
            <strong>{profile.name}</strong>
            <p>{profile.email}</p>
          </div>
        </div>
        <Input name="name" label="nome completo" />
        <Input name="email" label="e-mail" />

        <hr />

        <Input name="oldPassword" label="senha anterior" type="password" />
        <Input name="password" label="nova senha" type="password" />
        <Input
          name="confirmPassword"
          label="confirmação de senha"
          type="password"
        />

        <Button type="submit" background="#bb2929">
          atualizar perfil
        </Button>
      </Form>
    </Container>
  );
}
