/**
 * ./src/core/constants/state/index.js
 *
 * @flow
 */

import {
  triviasInitialState,
  userInitialState,
  navInitialState,
  appInitialState
} from "./state";

import { getStateKeys, initialState } from "./model";
import types from "./types";

export default {
  triviasInitialState,
  userInitialState,
  navInitialState,
  appInitialState,
  getStateKeys,
  initialState,
  types
};
