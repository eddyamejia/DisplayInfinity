import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchNative, Message } from 'rn-hgl/components';
import isString from 'lodash/isString';

import { colors } from 'configs';

import messages from './messages';
import styles from './styles';
import Icon from '../Icon';

function Header({ title, subTitle, baseStyle, icon, rightIcon, onRight, onLeft, leftIconStyle }) {
  let renderTitle = null;
  let renderSubTitle = null;

  if (title === true) {
    renderTitle = <Message style={styles.title} {...messages.title} />;
  } else if (title && isString(title)) {
    renderTitle = <Text style={styles.title}>{title}</Text>;
  } else if (title) {
    renderTitle = <Message style={styles.title} {...title} />;
  }

  if (subTitle === true) {
    renderSubTitle = <Message style={styles.subTitle} {...messages.subTitle} />;
  } else if (subTitle && isString(subTitle)) {
    renderSubTitle = <Text style={styles.subTitle}>{subTitle}</Text>;
  } else if (subTitle) {
    renderSubTitle = <Message style={styles.subTitle} {...subTitle} />;
  }

  return (
    <View style={[styles.base].concat(baseStyle)}>
      {icon ? (
        <TouchNative
          rippleEffect
          onPress={onLeft}
          rippleColor={colors.white.alpha(0.2).string()}
          style={styles.iconBase}
        >
          <Icon name={icon} style={[styles.icon].concat(leftIconStyle)} />
        </TouchNative>
      ) : null}
      <View style={styles.flex}>
        {renderTitle}
        {renderSubTitle}
      </View>
      {rightIcon ? (
        <TouchNative
          rippleEffect
          onPress={onRight}
          style={[styles.iconBase, styles.iconBaseRight]}
          rippleColor={colors.white.alpha(0.2).string()}
        >
          <Icon name={rightIcon} style={[styles.icon, styles.rightIcon]} />
        </TouchNative>
      ) : null}
    </View>
  );
}

Header.propTypes = {
  leftIconStyle: PropTypes.any,
  rightIcon: PropTypes.string,
  baseStyle: PropTypes.any,
  subTitle: PropTypes.any,
  onRight: PropTypes.func,
  onLeft: PropTypes.func,
  icon: PropTypes.string,
  logo: PropTypes.bool,
  title: PropTypes.any,
};

Header.defaultProps = {
  onRight: () => {},
  leftIconStyle: {},
  onLeft: () => {},
  rightIcon: null,
  subTitle: null,
  baseStyle: {},
  title: null,
  icon: null,
  logo: null,
};

export default Header;
