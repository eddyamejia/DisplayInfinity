/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  init: false,
  data: null,
});

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constants.INIT:
      return state.set('loading', true).set('error', false);
    case constants.INIT_SUCCESS:
      return state
        .set('loading', false)
        .set('data', payload)
        .set('init', true);
    case constants.INIT_FAILURE:
      return state.set('loading', false).set('error', true);
    case constants.SIGN_IN:
    case constants.SIGN_UP:
    case constants.SIGN_OUT:
      return state.set('loading', true).set('error', false);
    case constants.SIGN_IN_SUCCESS:
    case constants.SIGN_UP_SUCCESS:
      return state.set('loading', false).set('data', payload);
    case constants.SIGN_IN_FAILURE:
    case constants.SIGN_UP_FAILURE:
    case constants.SIGN_OUT_FAILURE:
      return state.set('loading', false).set('error', true);
    case constants.SIGN_OUT_SUCCESS:
      return state.set('loading', false).set('data', null);
    default:
      return state;
  }
}

export default authReducer;
