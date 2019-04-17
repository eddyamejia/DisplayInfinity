import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchNative } from 'rn-hgl/components';
import Color from 'color';

import { colors } from 'configs';

import Gradient from 'components/Gradient';
import Icon from 'components/Icon';

import styles from './styles';

function CardBox({
  name,
  icon,
  color,
  baseStyle,
  borderStyle,
  containerBaseStyle,
  iconStyle,
  textStyle,
  style,
  ...p
}) {
  const gradientColor = Color(color);
  return (
    <TouchNative noNative style={[styles.base].concat(baseStyle)} {...p}>
      <Gradient
        style={[styles.gradientBorder].concat(borderStyle)}
        colors={[gradientColor.lighten(0.2).string(), gradientColor.darken(0.35).string()]}
      >
        <View style={[styles.containerBase].concat(containerBaseStyle)}>
          <Gradient
            locations={[0.5, 0.5]}
            style={styles.container}
            start={{ x: 0.83, y: 0 }}
            end={{ x: 0.0, y: 0.83 }}
            colors={[colors.white.alpha(0.15).string(), colors.white.alpha(0.1).string()]}
          >
            <Icon {...icon} style={[styles.icon, { color }].concat(iconStyle)} />
          </Gradient>
        </View>
      </Gradient>
      <Text style={[styles.text].concat(textStyle)}>{name}</Text>
    </TouchNative>
  );
}

CardBox.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  containerBase: PropTypes.any,
  borderStyle: PropTypes.any,
  baseStyle: PropTypes.any,
  iconStyle: PropTypes.any,
  textStyle: PropTypes.any,
  style: PropTypes.any,
};

CardBox.defaultProps = {
  containerBase: {},
  borderStyle: {},
  baseStyle: {},
  iconStyle: {},
  textStyle: {},
  style: {},
};

export default CardBox;
