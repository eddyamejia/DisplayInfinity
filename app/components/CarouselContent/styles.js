import { StyleSheet } from 'react-native';
import dimensions from 'rn-hgl/dimensions';
import { scaling } from 'rn-hgl/utils';

import { colors } from 'configs';
import { max } from 'utils';

const SLIDE_SIZE = scaling(2.6);
const BOX_SIZE_0 = max(dimensions.width * 0.8, 400);
const BOX_SIZE_1 = BOX_SIZE_0 * 0.86;
const BOX_SIZE_2 = BOX_SIZE_1 * 0.82;
export const BOX_SIZE = BOX_SIZE_2 * 0.4589;

const styles = StyleSheet.create({
  carousel: {
    marginTop: scaling(4),
  },
  circleNode0: {
    width: BOX_SIZE_0,
    height: BOX_SIZE_0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BOX_SIZE_0 * 0.5,
    backgroundColor: colors.white.alpha(0.15).string(),
  },
  circleNode1: {
    width: BOX_SIZE_1,
    height: BOX_SIZE_1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BOX_SIZE_1 * 0.5,
    backgroundColor: colors.white.alpha(0.15).string(),
  },
  circleNode2: {
    width: BOX_SIZE_2,
    height: BOX_SIZE_2,
    alignItems: 'center',
    overflow: 'visible',
    justifyContent: 'center',
    borderRadius: BOX_SIZE_2 * 0.5,
    backgroundColor: colors.accent.string(),
  },
  circleGradient: {
    flex: 1,
    width: BOX_SIZE_2,
    height: BOX_SIZE_2,
    position: 'absolute',
    resizeMode: 'stretch',
  },
  slidesHolder: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scaling(2),
  },
  slide: {
    width: SLIDE_SIZE,
    height: SLIDE_SIZE,
    margin: scaling(1.2),
    borderRadius: SLIDE_SIZE * 0.5,
    backgroundColor: colors.white.string(),
  },
  slideActive: {
    backgroundColor: colors.blue.string(),
  },
});

export default styles;
