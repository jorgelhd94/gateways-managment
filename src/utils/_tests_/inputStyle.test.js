import {
  successInputClass,
  errorInputClass,
  selectSuccessClass,
  selectErrorClass
} from '../inputStyle';

test('input "success" has class ring-blue-600', () => {
  expect(successInputClass.includes('focus:ring-blue-600')).toBeTruthy();
});

test('input "error" has class ring-red-600', () => {
  expect(errorInputClass.includes('focus:ring-red-500')).toBeTruthy();
});

test('select "success" has class primary', () => {
  expect(
    selectSuccessClass.includes('focus:ring-primary-500 focus:border-primary-500')
  ).toBeTruthy();
});

test('select "error" has class danger', () => {
  expect(selectErrorClass.includes('focus:ring-danger-500 focus:border-danger-500')).toBeTruthy();
});
