import React from 'react';
import renderer from 'react-test-renderer';
import ImageSkeleton from './ImageSkeleton';

test('ImageSkeleton render correctly', () => {
  const component = renderer.create(<ImageSkeleton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
