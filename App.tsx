import * as React from 'react';

import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import CountScreen from 'src/components/CountScreen';
import HTMLScreen from 'src/components/HTMLScreen';
import SearchScreen from 'src/components/SearchScreen';
import WelcomeScreen from 'src/components/WelcomeScreen';
import configureStore from 'src/redux/store';
import Routes from 'src/utils/routes';
import { colors } from 'src/utils/styles';

const MainStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Count: { screen: CountScreen },
    Search: { screen: SearchScreen },
    HTML: { screen: HTMLScreen },
  },
  {
    initialRouteName: Routes.HTML,
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
