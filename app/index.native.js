import React, { PureComponent } from 'react';
import { StatusBar, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { getActiveRouteName } from 'rn-hgl/utils';
import { setDomain } from 'rn-hgl/services';
import { analytics } from 'rn-hgl/firebase';
import { isIOS } from 'rn-hgl/platform';

import configs, { colors, typography } from 'configs';

import Locale from 'containers/Locale';

import { translationMessages } from './i18n';
import Navigation from './Navigator.native';
import configureStore from './store';

const defaultStyles = {
  allowFontScaling: false,
  style: {
    color: colors.white.string(),
    fontSize: typography.body4,
  },
};

analytics.initAnalytics();
setDomain(configs.DOMAIN);
setCustomText(defaultStyles);
setCustomTextInput(defaultStyles);

const store = configureStore();

class App extends PureComponent {
  constructor(props) {
    super(props);

    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    this.initStatusbar();
    this.timeout0 = setTimeout(this.initStatusbar, 100);
  }

  componentDidUpdate() {
    this.initStatusbar();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout0);
  }

  onRouteChange = (prevState, currentState) => {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);
    if (prevScreen !== currentScreen) {
      analytics.setScreen(currentScreen);
    }
  };

  initStatusbar() {
    if (!isIOS) {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor(colors.alpha);
    }
  }

  componentDidCatch() {
    // console.warn(e);
  }

  render() {
    return (
      <Provider store={store}>
        <Locale messages={translationMessages}>
          <Navigation onNavigationStateChange={this.onRouteChange} />
        </Locale>
      </Provider>
    );
  }
}

export default App;
