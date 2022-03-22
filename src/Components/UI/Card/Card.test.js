import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Card render correctly', () => {
  const component = renderer.create(<Card>Hello</Card>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
