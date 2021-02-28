import produce from 'immer';

const INITIAL_STATE = {
  pagination: { total: 0, perPage: 1, page: 1, lastPage: 1 },
  data: [],
  loading: false,
};

export default function pets(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pets/GET_PETS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pets/GET_PETS_SUCCESS': {
        draft.pagination = action.payload.pagination;
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@pets/GET_PETS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
