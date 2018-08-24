import * as React from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import { colors } from 'src/utils/styles';

interface Props {
  description: string;
}

const PlaceComponent = (props: Props) => (
  <View style={ styles.place }>
    <Text style={ styles.placeText }> { props.description } </Text>
  </View>
);

const styles = StyleSheet.create({
  place : {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  placeText: {
    color: colors.WHITE,
    alignSelf: 'flex-start',
  },
});

export default PlaceComponent;
