import produce from 'immer';

const INITIAL_STATE = {
  product: [],
};

export default function car(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@car/ADD_PRODUCT_SUCCESS': {
        draft.product = [...state.product, ...action.payload.product];
        break;
      }
      default:
    }
  });
}
