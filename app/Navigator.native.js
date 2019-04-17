import { createStackNavigator } from 'react-navigation';

import routes from 'routes.native';

const Navigator = createStackNavigator(
  {
    splash: routes.splash,
    dashboard: routes.dashboard,
    configuration: routes.configuration,
  },
  {
    headerMode: 'none',
    initialRouteName: 'splash',
  },
);

export default Navigator;
