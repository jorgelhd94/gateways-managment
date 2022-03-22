import React from 'react';
import renderer from 'react-test-renderer';
import TableSkeleton from './TableSkeleton';

test('TableSkeleton render correctly', () => {
  const component = renderer.create(<TableSkeleton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
