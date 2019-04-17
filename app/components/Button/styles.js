import { StyleSheet } from 'react-native';
import { scaling } from 'rn-hgl/utils';
import { colors } from 'configs';

const styles = StyleSheet.create({
  base: {
    borderRadius: 4,
    backgroundColor: colors.accent.string(),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaling(1.5),
  },
  text: {
    color: colors.white.string(),
  },
});

export default styles;
