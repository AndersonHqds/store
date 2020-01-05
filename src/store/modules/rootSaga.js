import { all } from 'redux-saga/effects';

import car from './car/sagas';

export default function* rootSaga() {
  return yield all([car]);
}
