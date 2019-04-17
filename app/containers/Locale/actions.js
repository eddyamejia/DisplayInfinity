/*
 *
 * Locale actions
 *
 */

import * as constants from './constants';

export const change = (payload) => ({
  type: constants.CHANGE,
  payload,
});

export const init = (payload) => ({
  type: constants.INIT,
  payload,
});
