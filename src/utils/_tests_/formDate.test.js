import formatDate from '../formatDate';

test('format date correctly', () => {
  const date = new Date('December 17, 2021 13:24:00');
  expect(formatDate(date)).toBe('17-12-2021');
});
