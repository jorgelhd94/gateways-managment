import React from 'react';
import renderer from 'react-test-renderer';
import EmptyList from './EmptyList';

test('EmptyList render correctly', () => {
  const component = renderer.create(<EmptyList />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
