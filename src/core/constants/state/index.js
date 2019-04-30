/**
 * ./src/core/constants/state/index.js
 *
 * @flow
 */

import {
  triviaInitialState,
  userInitialState,
  navInitialState,
  appInitialState
} from "./state";

import { getStateKeys, initialState } from "./model";
import types from "./types";

export default {
  triviaInitialState,
  userInitialState,
  navInitialState,
  appInitialState,
  getStateKeys,
  initialState,
  types
};
