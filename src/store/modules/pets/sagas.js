import qs from 'qs';

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { api } from '~/services/api';

import { getPetsSuccess, getPetsFailure } from './actions';

export function* getPets({ payload }) {
  try {
    const { page, limit, user_id, type, situation } = payload;
    const response = yield call(api.get, 'pets', {
      params: {
        page,
        limit,
        user_id,
        type,
        situation,
      },
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });

    const { pagination, data } = response.data;

    let petsData = [];

    if (data.length) {
      petsData = data.map(pet => ({
        ...pet,
        filters: [pet.situation, pet.type],
      }));
    }

    yield put(getPetsSuccess(pagination, petsData));
  } catch (err) {
    const { response } = err;

    toast.error(response?.data?.error?.message || 'Ocorreu um erro interno');

    yield put(getPetsFailure());
  }
}

export default all([takeLatest('@pets/GET_PETS_REQUEST', getPets)]);
