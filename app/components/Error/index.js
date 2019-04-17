import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Message } from 'rn-hgl/components';
import isString from 'lodash/isString';

import styles from './styles';

function Error({ text, style }) {
  const textStyles = [styles.text].concat(style);
  return isString(text) ? (
    <Text style={textStyles}>{text}</Text>
  ) : (
    <Message {...text} style={textStyles} />
  );
}

Error.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Error.defaultProps = {};

export default Error;
