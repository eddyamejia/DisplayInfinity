/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  locale: constants.DEFAULT_LOCALE,
  loading: true,
  init: false,
});

function languageProviderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constants.CHANGE:
      return state.set('locale', payload);
    case constants.INIT:
      return state.set('init', true);
    default:
      return state;
  }
}

export default languageProviderReducer;
