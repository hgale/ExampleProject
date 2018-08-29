import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Routes from 'src/utils/routes';
import { colors } from 'src/utils/styles';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

export default class WelcomeScreen extends React.Component<Props, {}> {
  openCountScreen = () => {
    const navigation = this.props.navigation;
    navigation.navigate(Routes.Count);
  }

  openSearchScreen = () => {
    const navigation = this.props.navigation;
    navigation.navigate(Routes.Search);
  }

  openHTMLScreen = () => {
    const navigation = this.props.navigation;
    navigation.navigate(Routes.HTML);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>Welcome Screen</Text>
        <TouchableOpacity onPress={ this.openCountScreen }>
          <View style={ styles.buttonContainer }>
            <Text style={ styles.welcome }>Go to Count Screen</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.openSearchScreen }>
          <View style={ styles.buttonContainer }>
            <Text style={ styles.welcome }>Go to Search Screen</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.openHTMLScreen }>
          <View style={ styles.buttonContainer }>
            <Text style={ styles.welcome }>Go to HTML Screen</Text>
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
    width: '60%',
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
