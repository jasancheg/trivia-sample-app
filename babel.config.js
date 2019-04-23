/* eslint-disable prettier/prettier */
/* eslint-disable flowtype/require-parameter-type */
/* eslint-disable flowtype/require-return-type */
/* eslint-disable flowtype/require-valid-file-annotation */
/**
 * ./babel.config.js
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"]
    // env: {
    //   "development": {
    //     "plugins": [
    //       "transform-react-jsx-source"
    //     ]
    //   }
    // }
  };
};
