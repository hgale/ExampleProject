import * as React from 'react';
import 'react-native';
import * as renderer from 'react-test-renderer';

import LoadingIndicator from 'src/components/LoadingIndicator';

it('renders correctly', () => {
  const component = renderer.create(<LoadingIndicator />);
  expect(component).toMatchSnapshot();
});
