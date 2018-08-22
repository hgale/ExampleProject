import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Routes from 'src/utils/routes';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

class WelcomeScreen extends React.Component<Props, {}> {
  pushScreen = () => {
    const navigation = this.props.navigation;
    navigation.navigate(Routes.Other);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>Welcome Screen</Text>
        <TouchableOpacity onPress={ this.pushScreen }>
          <Text style={ styles.welcome }>Go to Other Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,    
    margin: 10,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
