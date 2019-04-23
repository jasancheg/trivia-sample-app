/**
 * ./src/core/utils/defineProp.js
 *
 * @flow
 */

type PropType = {};

/**
 * it just definde and object wrapper for the prop
 * @type {object}
 */
export default (name: string, value: mixed): PropType => {
  const prop = {};

  prop[name] = value;

  return prop;
};
