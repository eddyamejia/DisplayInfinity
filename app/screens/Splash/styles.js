import { StyleSheet } from 'react-native';

import { typography } from 'configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: typography.body1,
  },
});

export default styles;
