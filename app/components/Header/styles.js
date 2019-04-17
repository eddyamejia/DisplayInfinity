import { StyleSheet } from 'react-native';
import { elevation } from 'rn-hgl/styles';
import { isIOS } from 'rn-hgl/platform';
import { scaling } from 'rn-hgl/utils';

// import { font } from 'utils';

import { colors, typography } from 'configs';

const IMAGE_SIZE = scaling(6);
const ICON_SIZE = scaling(5.8);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  base: {
    zIndex: 2,
    padding: scaling(2),
    flexDirection: 'row',
    alignItems: 'center',
    ...elevation(isIOS ? 3 : 5),
    // backgroundColor: colors.blueDark.string(),
    // paddingTop: scaling(1) + isIOS ? dimensions.statusBarHeight : 0,
  },
  logoImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'contain',
    marginRight: scaling(2),
  },
  iconBase: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: 'center',
    marginRight: scaling(2),
    justifyContent: 'center',
    borderRadius: ICON_SIZE * 0.5,
    backgroundColor: colors.white.alpha(0.3).string(),
  },
  iconBaseRight: {
    // backgroundColor: 'red',
    marginRight: scaling(0),
    marginLeft: scaling(isIOS ? 0 : 2),
  },
  icon: {
    top: isIOS ? 1 : 0,
    fontSize: scaling(3.5),
    color: colors.white.string(),
  },
  title: {
    textAlign: 'center',
    fontSize: typography.body1,
    color: colors.white.string(),
  },
  subTitle: {
    color: colors.white.alpha(0.7).string(),
  },
  rightIcon: {
    left: isIOS ? 1 : 0,
  },
});

export default styles;
