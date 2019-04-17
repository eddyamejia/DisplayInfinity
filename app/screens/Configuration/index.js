import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { TouchNative } from 'rn-hgl';

import { colors } from 'configs';

import CarouselContent from 'components/CarouselContent';
import PageView from 'components/PageView';
import CardBox from 'components/CardBox';
import Icon from 'components/Icon';

import { cards, iconButtons } from './map';
import messages from './messages';
import styles from './styles';

class ConfigurationScreen extends Component {
  componentDidUpdate() {}

  render() {
    const { navigation } = this.props;
    const { card: navCard } = navigation.state.params;
    return (
      <PageView
        footer
        pathBg
        name="home"
        type="scroll"
        notFixedHeader
        navigation={navigation}
        style={styles.container}
        header={{
          rightIcon: 'tune',
          icon: 'chevron-left',
          title: messages.title,
          onLeft: () => navigation.goBack(),
        }}
      >
        <CarouselContent>
          <View style={styles.cardBaseHolder}>
            <CardBox
              {...navCard}
              baseStyle={styles.mainCardBase}
              textStyle={styles.mainCardText}
              iconStyle={styles.mainCardIcon}
              borderStyle={styles.mainCardBorder}
              containerBaseStyle={styles.mainCardContainerBase}
              icon={{
                name: 'cubes',
                type: 'fontAwesome5',
              }}
            />
            <View style={styles.mainCardBr} />
            <View style={styles.iconButtonsHolder}>
              {iconButtons.map((button) => (
                <TouchNative
                  rippleEffect
                  key={button.key}
                  style={styles.iconButtonBase}
                  rippleColor={colors.white.alpha(0.3).string()}
                >
                  <Icon name={button.icon} style={styles.iconButton} />
                </TouchNative>
              ))}
            </View>
          </View>
        </CarouselContent>
        <View style={styles.cardsHolder}>
          {cards.map((card) => (
            <CardBox
              {...card}
              key={card.name}
              baseStyle={styles.cardBase}
              containerBaseStyle={styles.cardContainerBase}
              icon={{
                name: 'cube-outline',
              }}
            />
          ))}
        </View>
      </PageView>
    );
  }
}

ConfigurationScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ConfigurationScreen;
