'use strict';
console.log("i'm babble")
const babelJest = require('babel-jest').default;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = babelJest.createTransformer({
  "presets": [
    "react-app",
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-import-assertions"
  ],
  babelrc: false,
});
