import * as React from 'react';

import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import OtherScreen from 'src/components/OtherScreen';
import WelcomeScreen from 'src/components/WelcomeScreen';
import configureStore from 'src/redux/store';
import Routes from 'src/utils/routes';
import { colors } from 'src/utils/styles';

const MainStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Other: { screen: OtherScreen},
  },
  {
    initialRouteName: Routes.Welcome,
    navigationOptions: (props: any) => ({
      headerStyle: { backgroundColor: colors.ORANGE },
    }),
  },
);

const store = configureStore();

const App = () => (
  <Provider store={ store }>
    <MainStack />
  </Provider>
);

export default App;
