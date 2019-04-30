/**
 * ./src/actions/index.js
 *
 * @flow
 */

import * as configActions from "./config";
import {
  fetchTrivias,
} from "./trivias"

module.exports = {
  fetchTrivias, 
  ...configActions
};
