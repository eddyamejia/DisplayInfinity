/*
 *
 * Locale
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Intl from 'intl'; // eslint-disable-line
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from './actions';

import makeSelectLocale from './selectors';

function Locale({ messages, children, locale }) {
  return (
    <IntlProvider textComponent={Text} locale={locale.locale} messages={messages[locale.locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

Locale.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.object.isRequired,
  messages: PropTypes.object,
};

Locale.defaultProps = {
  messages: {},
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const LocaleContainerFunc = ({ children, ...p }) => children({ ...p });

export const LocaleContainer = connect(
  mapStateToProps,
  (dispatch) => ({
    change: (p) => dispatch(actions.change(p)),
  }),
)(LocaleContainerFunc);

export const withLocale = (WrappedComponent) => (props) => (
  <LocaleContainer>{(locale) => <WrappedComponent locale={locale} {...props} />}</LocaleContainer>
);

export default connect(
  mapStateToProps,
  null,
)(Locale);
