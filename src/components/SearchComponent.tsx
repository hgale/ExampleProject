import * as React from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import LoadingIndictor from 'src/components/LoadingIndicator';
import PlaceComponent from 'src/components/PlaceComponent';
import { colors } from 'src/utils/styles';

interface Props {
  loading: boolean;
  results: object[];
  handleInputChange?: (value: string) => void;
}

export default class SearchComponent extends React.Component<Props> {
  private textInput: TextInput | null = null;

  keyExtractor = (item: any) => item.id;

  renderPlace = (rowData: any) => {
    const { item } = rowData;
    return (
      <PlaceComponent description={ item.description } />
    );
  }

  renderSeparator = () => {
    return ( <View style={ styles.line } /> );
  }

  renderPlaces = (loading: boolean, results: object[]) => {
    if (loading) {
      return (<LoadingIndictor style={ styles.LoadingIndicator } /> );
    }
    return (
        <FlatList
          data={ results }
          renderItem={ this.renderPlace }
          ItemSeparatorComponent={ this.renderSeparator }
          keyExtractor={ this.keyExtractor }
        />
    );
  }

  render() {
    const { loading, results } = this.props;
    return (
        <KeyboardAvoidingView style={ styles.container } behavior='padding'>
            <TextInput
                ref={ ref => (this.textInput = ref) }
                placeholder={ 'search for locations' }
                style={ styles.input }
                onChangeText={ this.props.handleInputChange }
            />
            { this.renderPlaces(loading, results) }
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  LoadingIndicator: {
    height:'70%',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.WHITE,
  },
  searchContainer: {
    width: '80%',
    height: 40,
    backgroundColor: 'red',
  },
  input: {
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: colors.BLACK,
    margin: 10,
    width: '85%',
  },
});
