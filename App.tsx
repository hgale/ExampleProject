import * as React from 'react';

import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from 'src/components/WelcomeScreen';

import Routes from 'src/utils/routes';
import { colors } from 'src/utils/styles';

const MainStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
  },
  {
    initialRouteName: Routes.Welcome,
    navigationOptions: (props: any) => ({
      headerStyle: { backgroundColor: colors.WHITE },
    }),
  },
);

const App = () => (
  <MainStack />
);

export default App;
