const genericInputClass =
  'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base';

const successInputClass =
  genericInputClass +
  ' focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent';

const errorInputClass =
  genericInputClass +
  ' ring-2 ring-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent';

export { genericInputClass, successInputClass, errorInputClass };
