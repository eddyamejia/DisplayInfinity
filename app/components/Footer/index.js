import React, { Component } from 'react';
import { View } from 'react-native';
import { Message } from 'rn-hgl/components';

import { colors } from 'configs';

import { initLayout } from 'utils';

import Gradient from 'components/Gradient';
import Button from 'components/Button';
import Icon from 'components/Icon';

import messages from './messages';
import { buttons } from './map';
import styles from './styles';

class Footer extends Component {
  state = { active: true };

  toggle = () => {
    initLayout();
    this.setState((state) => ({ active: !state.active }));
  };

  render() {
    const { active } = this.state;
    return (
      <View style={[styles.base, !active ? styles.baseInActive : {}]}>
        <Gradient
          style={styles.container}
          colors={[colors.white.alpha(0.16).string(), colors.white.alpha(0.09).string()]}
        >
          {buttons.map((button) => (
            <Button baseStyle={styles.buttonBase} style={styles.button} key={button.key}>
              <Icon name={button.icon} style={styles.icon} />
              <Message style={styles.buttonText} {...messages[button.key]} />
            </Button>
          ))}
        </Gradient>
      </View>
    );
  }
}

export default Footer;
