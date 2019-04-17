import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import PageView from 'components/PageView';

import styles from './styles';

class SplashScreen extends Component {
  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.init();
  }

  init = () => {
    const { navigation } = this.props;
    navigation.replace('dashboard');
  };

  render() {
    const { navigation } = this.props;
    return (
      <PageView style={styles.container} navigation={navigation}>
        <Text style={styles.text}>Splash Screen</Text>
      </PageView>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SplashScreen;
