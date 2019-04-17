/*
 *
 * Auth actions
 *
 */

import * as constants from './constants';

export const init = (payload) => ({
  type: constants.INIT,
  payload,
});

export const initSuccess = (payload) => ({
  type: constants.INIT_SUCCESS,
  payload,
});

export const initFailure = (payload) => ({
  type: constants.INIT_FAILURE,
  payload,
});

export const signIn = (payload) => ({
  type: constants.SIGN_IN,
  payload,
});

export const signInSuccess = (payload) => ({
  type: constants.SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = (payload) => ({
  type: constants.SIGN_IN_FAILURE,
  payload,
});

export const signUp = (payload) => ({
  type: constants.SIGN_UP,
  payload,
});

export const signUpSuccess = (payload) => ({
  type: constants.SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailure = (payload) => ({
  type: constants.SIGN_UP_FAILURE,
  payload,
});

export const signOut = (payload) => ({
  type: constants.SIGN_OUT,
  payload,
});

export const signOutSuccess = (payload) => ({
  type: constants.SIGN_OUT_SUCCESS,
  payload,
});

export const signOutFailure = (payload) => ({
  type: constants.SIGN_OUT_FAILURE,
  payload,
});
