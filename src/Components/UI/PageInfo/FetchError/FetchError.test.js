import React from 'react';
import renderer from 'react-test-renderer';
import FetchError from './FetchError';

test('FetchError render correctly', () => {
  const component = renderer.create(<FetchError />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
