/**
 *
 * PageView Styles
 *
 */

import { StyleSheet } from 'react-native';
import { isAndroid } from 'rn-hgl/platform';
import dimensions from 'rn-hgl/dimensions';

import { colors } from 'configs';

import { HEADER_SIZE } from 'components/Footer/styles';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.accent.string(),
    paddingTop: isAndroid ? dimensions.statusBarHeight : 0,
  },
  content: {
    // flex: 1,
    // opacity: 0,
  },
  imageBg: {
    zIndex: 0,
    position: 'absolute',
    resizeMode: 'contain',
  },
  footerSpacing: {
    paddingBottom: HEADER_SIZE,
  },
});

export default styles;
