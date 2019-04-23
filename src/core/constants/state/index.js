/**
 * ./src/core/constants/state/index.js
 *
 * @flow
 */

import {
  orderInitialState,
  userInitialState,
  pageInitialState,
  appInitialState,
  navInitialState
} from "./state";

import { getStateKeys, initialState } from "./model";
import types from "./types";

export default {
  orderInitialState,
  userInitialState,
  pageInitialState,
  appInitialState,
  navInitialState,
  getStateKeys,
  initialState,
  types
};
