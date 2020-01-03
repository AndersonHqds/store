import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  createdAt: null,
  name: null,
  avatar: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SAVE_USER_DATA_SUCCESS': {
        draft.id = action.payload.id;
        draft.createdAt = action.payload.createdAt;
        draft.name = action.payload.name;
        draft.avatar = action.payload.avatar;
        break;
      }
      default:
    }
  });
}
