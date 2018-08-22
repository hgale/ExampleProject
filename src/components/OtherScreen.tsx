import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { incrementCount } from 'src/redux/actions';
import { colors } from 'src/utils/styles';

interface Props {
  navigation: NavigationScreenProp<any,any>;
  count: number;
  incrementCount: () => any;
}

class OtherScreen extends React.Component<Props, {}> {
  dissmissScreen = () => {
    const navigation = this.props.navigation;
    navigation.goBack();
  }

  incrementCount = () => {
    this.props.incrementCount();
  }

  render() {
    const count = this.props.count;
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Other Screen</Text>
        <Text style={ styles.text }>Count: { count }</Text>
        <TouchableOpacity onPress={ this.incrementCount }>
          <Text style={ styles.text }>Increment Count</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.dissmissScreen }>
          <Text style={ styles.text }>Go Back</Text>
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
  text: {
    color: colors.WHITE,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

const mapStateToProps = (state: any) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch : any, props: any) => ({
  incrementCount: () => dispatch(incrementCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherScreen);
