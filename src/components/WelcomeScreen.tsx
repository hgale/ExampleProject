import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Routes from 'src/utils/routes';
import { colors } from 'src/utils/styles';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

class WelcomeScreen extends React.Component<Props, {}> {
  pushScreen = () => {
    const navigation = this.props.navigation;
    navigation.navigate(Routes.Count);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>Welcome Screen</Text>
        <TouchableOpacity onPress={ this.pushScreen }>
          <View style={ styles.buttonContainer }>
            <Text style={ styles.welcome }>Go to Count Screen</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 50,
    width: '50%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_PURPLE,
    borderRadius:10,
    borderWidth: 1,
    borderColor: colors.WHITE,
  },
  welcome: {
    color: colors.WHITE,
    fontSize: 20,    
    margin: 10,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
