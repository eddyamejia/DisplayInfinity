import React, { Component, Fragment } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Message, TouchNative } from 'rn-hgl/components';

import Icon from 'components/Icon';

import { scaling } from 'rn-hgl/utils';
import styles from './styles';

class Input extends Component {
  constructor(props) {
    super(props);

    let isSecure = false;

    if (props.secureTextEntry) {
      isSecure = true;
    }

    this.state = { isFocused: false, isSecure };
  }

  render() {
    const {
      secureTextEntry,
      placeholderStyle,
      placeholder,
      underline,
      iconStyle,
      baseStyle,
      afterIcon,
      elevation,
      innerRef,
      error,
      value,
      style,
      icon,
      br,
      ...props
    } = this.props;
    const { isFocused, isSecure } = this.state;
    return (
      <Fragment>
        <View
          style={[
            styles.base,
            underline ? styles.baseWithUnderline : {},
            underline && isFocused ? styles.baseWithUnderlineFocus : {},
            elevation ? styles.baseWithElevation : {},
          ].concat(baseStyle)}
        >
          {placeholder && !value ? (
            <View style={styles.placeholderBase}>
              <Message
                {...placeholder}
                style={[styles.placeholder, icon ? styles.placeholderWithIcon : null].concat(
                  placeholderStyle,
                )}
              />
            </View>
          ) : null}
          {icon ? (
            <View style={styles.iconBase}>
              <Icon
                name={icon}
                style={[styles.icon, error ? styles.iconWithError : {}].concat(iconStyle)}
              />
            </View>
          ) : null}
          <TextInput
            {...props}
            value={value}
            ref={innerRef}
            returnKeyType="done"
            secureTextEntry={isSecure}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            underlineColorAndroid="transparent"
            style={[
              styles.input,
              icon ? styles.inputWithIcon : {},
              error ? styles.inputWithError : {},
            ].concat(style)}
          />
          {afterIcon ? (
            <Fragment>
              {afterIcon.touch ? (
                <TouchNative
                  rippleEffect
                  onPress={() => {
                    if (secureTextEntry) {
                      this.setState({ isSecure: !isSecure });
                    } else {
                      afterIcon.onPress();
                    }
                  }}
                  style={styles.iconBase}
                >
                  <Icon
                    name={afterIcon.icon}
                    style={[styles.icon, styles.afterIcon].concat(iconStyle)}
                  />
                </TouchNative>
              ) : (
                <View style={styles.iconBase}>
                  <Icon
                    name={afterIcon.icon}
                    style={[styles.icon, styles.afterIcon].concat(iconStyle)}
                  />
                </View>
              )}
            </Fragment>
          ) : null}
        </View>
        {br !== null ? <View style={[styles.br, { marginHorizontal: scaling(br) }]} /> : null}
      </Fragment>
    );
  }
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  secureTextEntry: PropTypes.bool,
  afterIcon: PropTypes.object,
  elevation: PropTypes.bool,
  underline: PropTypes.bool,
  innerRef: PropTypes.func,
  icon: PropTypes.string,
  error: PropTypes.bool,
  br: PropTypes.number,
};

Input.defaultProps = {
  secureTextEntry: false,
  placeholder: null,
  innerRef: () => {},
  underline: false,
  afterIcon: null,
  elevation: true,
  error: false,
  icon: null,
  br: null,
};

export default Input;
