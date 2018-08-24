import * as React from 'react';
import 'react-native';
import * as renderer from 'react-test-renderer';

import SearchComponent from 'src/components/SearchComponent';

const inputChange = (test : string) => {};

const mockResults = [ {description: 'House of Harry'} ];

it('renders correctly with loading true', () => {
  const component = renderer.create(
    <SearchComponent 
      loading={ true }
      handleInputChange={ inputChange }
      results={ mockResults }
    />);
  expect(component).toMatchSnapshot();
});

it('renders correctly with loading false', () => {
  const component = renderer.create(
    <SearchComponent 
      loading={ true }
      handleInputChange={ inputChange }
      results={ mockResults }
    />);
  expect(component).toMatchSnapshot();
});
