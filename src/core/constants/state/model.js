/**
 * ./src/core/constants/state/model.js
 *
 * @flow
 */

import {
  triviaInitialState,
  userInitialState,
  navInitialState,
  appInitialState
} from "./state";

export const initialState = {
  trivia: {
    ...triviaInitialState
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
