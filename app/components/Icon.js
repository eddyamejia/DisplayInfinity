import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CommunityIconsAnimated = Animated.createAnimatedComponent(CommunityIcons);
const IconsAnimated = Animated.createAnimatedComponent(Icons);
const EntypoAnimated = Animated.createAnimatedComponent(Entypo);
const SimpleLineIconsAnimated = Animated.createAnimatedComponent(SimpleLineIcons);

export function Icon({ animated, type, innerRef, ...props }) {
  let Comp = Icons;
  if (animated) {
    Comp = IconsAnimated;
  }
  if (type === 'community' && !animated) {
    Comp = CommunityIcons;
  } else if (type === 'community' && animated) {
    Comp = CommunityIconsAnimated;
  } else if (type === 'entypo' && !animated) {
    Comp = Entypo;
  } else if (type === 'entypo' && animated) {
    Comp = EntypoAnimated;
  } else if (type === 'simpleline' && !animated) {
    Comp = SimpleLineIcons;
  } else if (type === 'simpleline' && animated) {
    Comp = SimpleLineIconsAnimated;
  } else if (type === 'fontAwesome5' && !animated) {
    Comp = FontAwesome5Icons;
  } else if (type === 'ant' && !animated) {
    Comp = AntIcons;
  } else if (type === 'ion' && !animated) {
    Comp = IoniconsIcons;
  }

  return <Comp ref={innerRef} {...props} />;
}

Icon.propTypes = {
  animated: PropTypes.bool,
  type: PropTypes.oneOf(['community', 'entypo', 'simpleline', 'fontAwesome5', 'ant', 'ios']),
  innerRef: PropTypes.func,
};
Icon.defaultProps = {
  animated: false,
  type: 'community',
  innerRef: () => {},
};

export default Icon;
