import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

class OtherScreen extends React.Component<Props, {}> {
  dissmissScreen = () => {
    const navigation = this.props.navigation;
    navigation.goBack();
  }
  
  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ this.dissmissScreen }>
          <Text style={ styles.other }>Other Screen</Text>
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
  other: {
    fontSize: 20,    
    margin: 10,
    textAlign: 'center',
  },
});

export default OtherScreen;
