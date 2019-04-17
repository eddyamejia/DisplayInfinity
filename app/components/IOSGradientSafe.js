import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import dimensions from 'rn-hgl/dimensions';
import { isIOS } from 'rn-hgl/platform';

import { colors } from 'configs';

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -dimensions.height * 0.8,
    height: dimensions.height * 0.8,
    backgroundColor: colors.paleGrey.string(),
  },
});

function IOSGradientSafe({ style, ...props }) {
  return isIOS ? <View style={[styles.base].concat(style)} {...props} /> : null;
}

IOSGradientSafe.propTypes = {
  style: PropTypes.any,
};

IOSGradientSafe.defaultProps = {
  style: {},
};

export default IOSGradientSafe;
