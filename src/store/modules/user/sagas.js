import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { saveUserDataSuccess } from './actions';

import api from '~/services/api';

export function* getUserData() {
  try {
    const response = yield call(api.post, 'user');
    yield put(saveUserDataSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao receber dados do usuário, atualize a api');
  }
}

export default all([takeLatest('@user/SAVE_USER_DATA', getUserData)]);
