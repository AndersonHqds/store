import produce from 'immer';

const INITIAL_STATE = {
  product: [],
};

export default function car(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@car/ADD_PRODUCT_SUCCESS': {
        draft.product = [...state.product, action.payload.product];
        break;
      }
      case '@car/UPDATE_QUANTITY_SUCCESS': {
        const index = draft.product.findIndex(
          p => p.id === action.payload.product.id
        );

        if (index >= 0) {
          draft.product[index].quantity = action.payload.quantity;
        }
        break;
      }

      case '@car/REMOVE_PRODUCT_SUCCESS': {
        const index = draft.product.findIndex(
          p => p.id === action.payload.product.id
        );

        if (index >= 0) {
          draft.product.splice(index, 1);
        }
        break;
      }

      default:
        return state;
    }
  });
}
