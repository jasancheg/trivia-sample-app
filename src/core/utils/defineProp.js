/**
 * ./src/core/utils/defineProp.js
 *
 * @flow
 */

type PropType = {};

/**
 * it define and object wrapper for the prop (typed)
 * @type {object}
 */
export default (name: string, value: mixed): PropType => {
  const prop = {};

  prop[name] = value;

  return prop;
};
