import { StyleSheet } from 'react-native';
import dimensions from 'rn-hgl/dimensions';
import { scaling } from 'rn-hgl/utils';

import { colors, typography } from 'configs';

import { max } from 'utils';

const CARD_SIZE = (dimensions.width - scaling(1)) / 3 - scaling(3.5);
const BOX_SIZE = max(dimensions.width * 0.38, 400);
const ICON_BUTTON_SIZE = scaling(7);
const SLIDE_SIZE = scaling(2.6);
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.dark.alpha(0.0),
  },
  text: {
    margin: scaling(1),
  },
  buttonBase: {
    margin: scaling(1),
  },
  cardBaseHolder: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCardBase: {
    flex: 1,
    marginTop: scaling(2),
    alignSelf: 'center',
    marginBottom: scaling(2),
  },
  mainCardContainerBase: {
    width: BOX_SIZE,
    height: BOX_SIZE,
  },
  mainCardIcon: {
    fontSize: BOX_SIZE * 0.48,
  },
  mainCardBorder: {
    padding: scaling(0.8),
  },
  mainCardText: {
    marginTop: scaling(1),
    fontSize: typography.body2,
  },
  mainCardBr: {
    height: 2,
    alignSelf: 'center',
    marginTop: scaling(1),
    width: BOX_SIZE * 1.1,
    backgroundColor: colors.white.string(),
  },
  slidesHolder: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: scaling(2),
    justifyContent: 'center',
  },
  slide: {
    elevation: 1,
    width: SLIDE_SIZE,
    height: SLIDE_SIZE,
    margin: scaling(1.2),
    borderRadius: SLIDE_SIZE * 0.5,
    backgroundColor: colors.white.string(),
  },
  slideActive: {
    backgroundColor: colors.blue.string(),
  },
  iconButtonsHolder: {
    padding: scaling(1),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scaling(1),
    justifyContent: 'center',
  },
  iconButtonBase: {
    borderWidth: 1.5,
    margin: scaling(1),
    alignItems: 'center',
    justifyContent: 'center',
    width: ICON_BUTTON_SIZE,
    height: ICON_BUTTON_SIZE,
    borderColor: colors.white.string(),
    borderRadius: ICON_BUTTON_SIZE * 0.5,
  },
  iconButton: {
    color: colors.white.string(),
    fontSize: ICON_BUTTON_SIZE * 0.5,
  },
  cardsHolder: {
    flexWrap: 'wrap',
    margin: scaling(1),
    flexDirection: 'row',
    justifyContent: 'center',
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
