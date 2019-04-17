import Color from 'color';
import defaultColors from 'rn-hgl/colors';
import { scaling } from 'rn-hgl/utils';

const configs = {
  DOMAIN: 'https://hackerhgl.github.io',
};

export const colors = {
  ...defaultColors,
  error: Color('#f00'),
  accent: Color('#020038'),
  blue: Color('#229EFC'),
  secondary: Color('#979797'),
  success: defaultColors.medium,
  buttonBg: Color('#e9e9e9'),
  lightBg: Color('#f9f9f9'),
  input: Color('#cbcbcb'),
  inputLight: Color('#b2b2b2'),
  inputDark: Color('#4e4e4e'),
  textSub: Color('#7b7b7b'),
  borderLightColor: Color('#7b7b7b').lighten(0.5),
};

export const typography = {
  display1: scaling(5.0),
  display2: scaling(4.7),
  display3: scaling(4.4),
  display4: scaling(4.1),
  display5: scaling(3.8),
  display6: scaling(3.5),
  body1: scaling(3.2),
  body2: scaling(3.0),
  body3: scaling(2.8),
  body4: scaling(2.6),
  body5: scaling(2.4),
  body6: scaling(2.2),
  label1: scaling(2.0),
  label2: scaling(1.8),
  label3: scaling(1.6),
};

export default configs;
