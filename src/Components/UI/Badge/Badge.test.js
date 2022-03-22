import React from 'react';
import renderer from 'react-test-renderer';
import Badge from './Badge';

test('Badge with primary style', () => {
  const component = renderer.create(<Badge type="primary">1</Badge>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
