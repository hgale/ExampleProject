import * as React from 'react';
import 'react-native';
import * as renderer from 'react-test-renderer';

import PlaceComponent from 'src/components/PlaceComponent';

it('renders correctly', () => {
  const component = renderer.create(<PlaceComponent description='House of Shields' />);
  expect(component).toMatchSnapshot();
});
