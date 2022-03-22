import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './ErrorMessage';

test('Error Message render correctly', () => {
  const component = renderer.create(<ErrorMessage>Error</ErrorMessage>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
