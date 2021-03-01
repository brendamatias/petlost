import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { api } from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import getError from '~/services/getError';

export function* updateProfile({ payload }) {
  try {
    const formData = new FormData();

    const { name, email, avatar, ...rest } = payload.data;

    formData.append('name', name);
    formData.append('email', email);
    formData.append('avatar', avatar);

    if (rest.oldPassword) {
      formData.append('oldPassword', rest.oldPassword);
      formData.append('password', rest.password);
      formData.append('confirmPassword', rest.confirmPassword);
    }

    const { data } = yield call(api.put, 'users', formData);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(data.data));
  } catch (err) {
    getError(err, 'Erro ao atualizar o perfil, verifique seus dados');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
