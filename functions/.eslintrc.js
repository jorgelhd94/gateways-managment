module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  // eslint-disable-next-line max-len
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  rules: {
    quotes: ["error", "double"],
  },
};
