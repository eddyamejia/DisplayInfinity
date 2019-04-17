import { takeLatest, call, put } from 'redux-saga/effects';

import { storage } from 'services';

import * as constants from './constants';
import * as actions from './actions';

export const init = function* initSaga() {
  try {
    const cache = yield call(storage.getItem, constants.CACHE.DATA);
    if (cache) {
      yield put(actions.change(cache));
    }
  } catch (e) {
    //
  }
};

export const change = function* changeSaga({ payload }) {
  try {
    yield call(storage.setItem, constants.CACHE.DATA, payload);
  } catch (e) {
    //
  }
};

let didRun = false;
export default function* defaultSaga() {
  if (didRun) {
    return;
  }
  didRun = true;
  yield takeLatest(constants.INIT, init);
  yield takeLatest(constants.CHANGE, change);
}
