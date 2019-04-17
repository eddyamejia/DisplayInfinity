import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { Message } from 'rn-hgl';

import CarouselContent from 'components/CarouselContent';
import PageView from 'components/PageView';
import CardBox from 'components/CardBox';
import Input from 'components/Input';

import styles from './styles';
import { cards } from './map';
import messages from './messages';

class DashboardScreen extends Component {
  state = {
    time: '',
    motionSensor: false,
  };

  componentDidUpdate() {}

  render() {
    const { time, motionSensor } = this.state;
    const { navigation } = this.props;
    return (
      <PageView
        footer
        name="home"
        type="scroll"
        notFixedHeader
        navigation={navigation}
        style={styles.container}
        header={{
          icon: 'chevron-left',
          rightIcon: 'tune',
          title: messages.title,
        }}
      >
        <CarouselContent>
          <View style={styles.motionSensorBase}>
            <Message style={styles.subHeading} {...messages.motionSensor} />
            <View>
              <View style={styles.row}>
                <Message style={styles.motionText} {...messages.yes} />
                <View style={styles.switchBase}>
                  <Switch
                    value={motionSensor}
                    onValueChange={(value) => this.setState({ motionSensor: value })}
                  />
                </View>
                <Message style={styles.motionText} {...messages.no} />
              </View>
              <View style={styles.row}>
                <Message style={styles.motionText} {...messages.time} />
                <Input
                  value={time}
                  baseStyle={styles.inputBase}
                  onChangeText={(value) => this.setState({ time: value })}
                />
                <Message style={styles.motionText} {...messages.sec} />
              </View>
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
              onPress={() => navigation.navigate('configuration', { card })}
              icon={{
                name: 'cubes',
                type: 'fontAwesome5',
              }}
            />
          ))}
        </View>
      </PageView>
    );
  }
}

DashboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DashboardScreen;
