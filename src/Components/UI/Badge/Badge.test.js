import React from 'react';
import renderer from 'react-test-renderer';
import Badge from './Badge';

test('Badge with primary style', () => {
  const BadgeComp = <Badge type="primary">1</Badge>;

  const component = renderer.create(BadgeComp);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.className).toContain('bg-blue-500');
});

test('Badge with success style', () => {
  const component = renderer.create(<Badge type="success">1</Badge>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.className).toContain('bg-green-500');
});

test('Badge with danger style', () => {
  const component = renderer.create(<Badge type="danger">1</Badge>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.className).toContain('bg-red-500');
});

test('Badge with sad style', () => {
  const component = renderer.create(<Badge type="sad">1</Badge>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.className).toContain('bg-gray-500');
});
