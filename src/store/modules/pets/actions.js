export function getPetsRequest({ page, user_id, type, situation }) {
  return {
    type: '@pets/GET_PETS_REQUEST',
    payload: { page, user_id, type, situation },
  };
}

export function getPetsSuccess(pagination, data) {
  return {
    type: '@pets/GET_PETS_SUCCESS',
    payload: { pagination, data },
  };
}

export function getPetsFailure() {
  return {
    type: '@pets/GET_PETS_FAILURE',
  };
}
