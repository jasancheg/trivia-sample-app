/**
 * ./src/actions/index.js
 *
 * @flow
 */

import * as configActions from "./config";
import {
  fetchTrivia,
} from "./trivia"

module.exports = {
  fetchTrivia, 
  ...configActions
};
