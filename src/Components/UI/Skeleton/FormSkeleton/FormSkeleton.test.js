import React from 'react';
import renderer from 'react-test-renderer';
import FormSkeleton from './FormSkeleton';

test('FormSkeleton render correctly', () => {
  const component = renderer.create(<FormSkeleton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
