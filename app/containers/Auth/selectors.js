import { createSelector } from 'reselect';

const selectAuthDomain = (state) => state.get('auth');

const makeSelectAuth = () =>
  createSelector(
    selectAuthDomain,
    (subState) => subState.toJS(),
  );

export default makeSelectAuth;
export { selectAuthDomain };
