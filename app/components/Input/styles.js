import { StyleSheet } from 'react-native';
import { isAndroid } from 'rn-hgl/platform';
import { scaling } from 'rn-hgl/utils';

import { colors } from 'configs';
import { elevation } from 'rn-hgl/styles';

const ICON_SIZE = scaling(3);
const ICON_BASE_SIZE = ICON_SIZE * 2;

const styles = StyleSheet.create({
  base: {
    // borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white.string(),
  },
  baseWithElevation: elevation(2),
  baseWithUnderline: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1.5,
  },
  baseWithUnderlineFocus: {
    borderColor: colors.accent.string(),
  },
  iconBase: {
    height: '100%',
    alignItems: 'center',
    width: ICON_BASE_SIZE,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconImage: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    // backgroundColor: 'red',
  },
  icon: {
    fontSize: ICON_SIZE * 0.9,
    color: colors.input.string(),
  },
  iconWithError: {
    color: colors.error.string(),
  },
  afterIcon: {
    color: colors.inputDark.string(),
  },
  input: {
    flex: 1,
    color: colors.dark.string(),
    paddingVertical: scaling(isAndroid ? 1 : 2),
    paddingHorizontal: scaling(isAndroid ? 1 : 2),
  },
  inputWithError: {
    color: colors.error.string(),
  },
  inputWithIcon: {
    paddingHorizontal: 0,
  },
  placeholderBase: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    left: scaling(isAndroid ? 0 : 1.8),
    color: colors.dark.alpha(0.25).string(),
    marginLeft: scaling(isAndroid ? 0.8 : 0),
  },
  placeholderWithIcon: {
    left: ICON_BASE_SIZE,
  },
  br: {
    height: 2,
    backgroundColor: colors.input.string(),
  },
});

export default styles;
