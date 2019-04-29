/**
 * ./src/core/constants/state/model.js
 *
 * @flow
 */

import {
  triviasInitialState,
  userInitialState,
  navInitialState,
  appInitialState
} from "./state";

export const initialState = {
  trivias: {
    ...triviasInitialState
  },
  user: {
    ...userInitialState
  },
  nav: {
    ...navInitialState
  },
  app: {
    ...appInitialState
  }
};

export const getStateKeys = (): Array<string> => Object.keys(initialState);
