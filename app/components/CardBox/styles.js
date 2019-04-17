import { StyleSheet } from 'react-native';
import { scaling } from 'rn-hgl/utils';

import { colors, typography } from 'configs';

const styles = StyleSheet.create({
  base: {},
  gradientBorder: {
    flex: 1,
    borderRadius: 6,
    padding: scaling(0.5),
  },
  containerBase: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: colors.accent.string(),
  },
  container: {
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: scaling(5.5),
  },
  text: {
    top: scaling(1),
    textAlign: 'center',
    fontSize: typography.label1,
  },
});

export default styles;
