const genericInputClass =
  'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base';

const successInputClass =
  genericInputClass +
  ' focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent';

const errorInputClass =
  genericInputClass +
  ' ring-2 ring-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent';

const selectGenericClass =
  'block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm';
const selectSuccessClass =
  selectGenericClass + ' focus:outline-none focus:ring-primary-500 focus:border-primary-500';
const selectErrorClass =
  selectGenericClass +
  ' ring-2 ring-red-500 outline-none focus:ring-danger-500 focus:border-danger-500';

export { successInputClass, errorInputClass, selectSuccessClass, selectErrorClass };
