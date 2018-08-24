import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/styles';

interface Props {
  style?: ViewStyle;
}

const LoadingIndicator = (props: Props) => (
  <View style={ styles.container }>
    <ActivityIndicator
      style={ [ props.style, styles.indicator] }
      size='large'
      color={ colors.LOADING }
    />
    <Text style={ styles.loadingText }>Loading...</Text>
  </View> 
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
  },
  loadingText: {
    color: colors.WHITE,
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default LoadingIndicator;
