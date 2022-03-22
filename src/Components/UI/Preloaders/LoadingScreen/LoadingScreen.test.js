import React from 'react';
import renderer from 'react-test-renderer';
import LoadingScreen from './LoadingScreen';

test('LoadingScreen render correctly', () => {
  const component = renderer.create(<LoadingScreen />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
