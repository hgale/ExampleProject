import * as React from 'react';

import { StyleSheet, Text, View} from 'react-native';

class WelcomeScreen extends React.Component<{}, {}> {

  render() {
    return (
        <View style={ styles.container }>
        <Text style={ styles.welcome }>Hello world</Text>
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
