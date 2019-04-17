/*
 *
 * Auth
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import makeSelectAuth from './selectors';
import * as actions from './actions';

export class Auth extends Component {
  componentDidMount() {
    if (!this.props.Auth.init) {
      this.props.init();
    }
  }

  render() {
    return this.props.children({
      ...this.props.Auth,
      signIn: this.props.signIn,
      signUp: this.props.signUp,
      signOut: this.props.signOut,
    });
  }
}

Auth.propTypes = {
  Auth: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.bool,
    init: PropTypes.bool,
  }).isRequired,
  init: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Auth: makeSelectAuth(),
});

const mapDispatchToProps = (dispatch) => ({
  init: (p) => dispatch(actions.init(p)),
  signIn: (p) => dispatch(actions.signIn(p)),
  signUp: (p) => dispatch(actions.signUp(p)),
  signOut: (p) => dispatch(actions.signOut(p)),
});

const AuthRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

export const withAuth = (WrappedComponent) => (p) => (
  <AuthRedux>{(auth) => <WrappedComponent auth={auth} {...p} />}</AuthRedux>
);

export default AuthRedux;
