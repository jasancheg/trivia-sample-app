/**
 * ./src/core/constants/state/model.js
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

export const initialState = {
  order: {
    ...orderInitialState
  },
  user: {
    ...userInitialState
  },
  page: {
    ...pageInitialState
  },
  app: {
    ...appInitialState
  },
  nav: {
    ...navInitialState
  }
};

export const getStateKeys = (): Array<string> => Object.keys(initialState);
