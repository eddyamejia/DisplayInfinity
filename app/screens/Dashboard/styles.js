import { StyleSheet } from 'react-native';
import dimensions from 'rn-hgl/dimensions';
import { scaling } from 'rn-hgl/utils';

import { typography } from 'configs';

const CARD_SIZE = (dimensions.width - scaling(1)) / 3 - scaling(3.5);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {},
  motionSensorBase: {
    flex: 1,
    alignItems: 'center',
  },
  subHeading: {
    marginTop: scaling(8),
    marginBottom: scaling(2),
    fontSize: typography.body1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: scaling(2),
  },
  switchBase: {
    marginHorizontal: scaling(4),
  },
  inputBase: {
    maxWidth: scaling(16),
    marginHorizontal: scaling(3),
  },
  cardsHolder: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: scaling(1),
    flexDirection: 'row',
  },
  cardBase: {
    flex: 0,
    margin: scaling(1),
    marginBottom: scaling(3),
  },
  cardContainerBase: {
    width: CARD_SIZE,
    height: CARD_SIZE,
  },
});

export default styles;
