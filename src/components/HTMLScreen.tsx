import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
//@ts-ignore
import HTML from 'react-native-render-html';
import { NavigationScreenProp } from 'react-navigation';
import htmlContent from 'src/utils/html';
import { colors } from 'src/utils/styles';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}


export default class HTMLScreen extends React.Component<Props, {}> {

  render() {
    let htmlTags = htmlContent.match(/<[a-zA-Z]+(?:>|.*?[^?]>)/g); 
    let tagCount = htmlTags ? htmlTags.length : 0;
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>HTML Tag count: { tagCount } </Text>
        <ScrollView style={ { flex: 1 } }>
          <HTML html={ htmlContent } imagesMaxWidth={ Dimensions.get('window').width } />
        </ScrollView>
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
