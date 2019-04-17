/**
 *
 * PageView
 *
 */

import React, { Fragment } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import AutoHeightImage from 'react-native-auto-height-image';
import { ScrollView } from 'react-native-gesture-handler';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dimensions from 'rn-hgl/dimensions';

import { SafeAreaView } from 'react-navigation';
import { isIOS } from 'rn-hgl/platform';

import pathBgImage from 'assets/pathBg.png';

import Gradient from 'components/Gradient';
import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from './styles';

function PageView({
  type,
  style,
  header,
  pathBg,
  footer,
  gradient,
  children,
  innerRef,
  baseStyle,
  baseProps,
  noKeyBoard,
  navigation,
  afterRender,
  notFixedHeader,
  ...props
}) {
  let Comp = View;
  const compProps = {};

  if (type === 'scroll') {
    Comp = ScrollView;
    compProps.keyboardShouldPersistTaps = 'handled';
  }

  let footerRef = null;

  const headerProps = {
    ...header,
    onRight: () => {
      if (footerRef) {
        footerRef.toggle();
      }
    },
  };

  const child = (
    <Fragment>
      <SafeAreaView {...baseProps} style={[styles.base].concat([baseStyle])}>
        {afterRender}
        {pathBg ? (
          <AutoHeightImage width={dimensions.width} source={pathBgImage} style={styles.imageBg} />
        ) : null}
        {header && !notFixedHeader ? <Header {...headerProps} /> : null}
        <Comp style={[styles.content].concat(style)} {...compProps} {...props} ref={innerRef}>
          {header && notFixedHeader ? <Header {...headerProps} /> : null}

          {children}
          <View style={styles.footerSpacing} />
        </Comp>
        {footer ? (
          <Footer
            ref={(node) => {
              if (node) {
                footerRef = node;
              }
            }}
          />
        ) : null}
      </SafeAreaView>
      {isIOS && !noKeyBoard ? <KeyboardSpacer /> : null}
    </Fragment>
  );

  return gradient ? (
    <Gradient locations={[0, 1]} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.flex}>
      {child}
    </Gradient>
  ) : (
    child
  );
}

PageView.propTypes = {
  navigation: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  notFixedHeader: PropTypes.bool,
  afterRender: PropTypes.node,
  baseProps: PropTypes.object,
  noKeyBoard: PropTypes.bool,
  innerRef: PropTypes.func,
  gradient: PropTypes.bool,
  header: PropTypes.object,
  pathBg: PropTypes.bool,
  type: PropTypes.string,
  footer: PropTypes.bool,
  style: PropTypes.any,
};

PageView.defaultProps = {
  innerRef: () => {},
  notFixedHeader: false,
  afterRender: null,
  noKeyBoard: false,
  gradient: false,
  type: 'default',
  baseProps: {},
  pathBg: false,
  footer: false,
  header: null,
  style: {},
};

export default PageView;
