import { select, call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { addToCarSuccess } from './actions';

function* addToCar({ product }) {
  const productExists = yield select(state =>
    state.car.find(p => p.id === product.id)
  );

  console.log(product);

  const currentValue = productExists ? productExists.quantity : 0;

  const value = currentValue + 1;

  const data = {
    ...product,
    quantity: value,
  };

  yield put(addToCarSuccess(data));
}

export default all([takeLatest('@car/ADD_PRODUCT', addToCar)]);
