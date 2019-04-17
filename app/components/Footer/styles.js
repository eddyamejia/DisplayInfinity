import { StyleSheet } from 'react-native';
import { scaling } from 'rn-hgl/utils';

import { colors, typography } from 'configs';

export const HEADER_SIZE = scaling(12);

const styles = StyleSheet.create({
  base: {
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1.5,
    height: HEADER_SIZE,
    position: 'absolute',
    borderColor: colors.secondary.string(),
    backgroundColor: colors.accent.string(),
  },
  baseInActive: {
    bottom: -HEADER_SIZE * 1.2,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: scaling(2),
    paddingHorizontal: scaling(1),
  },
  icon: {
    fontSize: scaling(2.8),
    marginRight: scaling(1),
    color: colors.white.string(),
  },
  buttonBase: {
    flex: 1,
    margin: scaling(1),
    borderRadius: scaling(4),
    backgroundColor: colors.white.alpha(0.2).string(),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: typography.body6,
  },
});

export default styles;
