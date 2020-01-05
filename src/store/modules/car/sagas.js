import { select, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { addToCarSuccess, updateQuantitySuccess } from './actions';

function* addToCar({ product }) {
  try {
    const productExists = yield select(state =>
      state.car.product.find(p => p.id === product.id)
    );

    const currentValue = productExists ? productExists.quantity : 0;
    const value = currentValue + 1;

    if (productExists) {
      yield put(updateQuantitySuccess(product, value));
    } else {
      const data = {
        ...product,
        quantity: value,
      };

      yield put(addToCarSuccess(data));
    }
    toast.success('Produto adicionado com sucesso');
  } catch (error) {
    toast.error('Um erro ocorreu ao adicionar o produto ao carrinho');
  }
}

export default all([takeLatest('@car/ADD_PRODUCT', addToCar)]);
