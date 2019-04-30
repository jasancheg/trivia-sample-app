/**
 * ./src/reducers/trivia.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";
import { state as stateConfig } from "../../core/constants";

const { types, triviaInitialState } = stateConfig;

type StateType = {
  +questions: Array<{}>
};

// reducer
export default (
  state: StateType = triviaInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.SET_TESTS:
      return { ...triviaInitialState };
    case types.TRIVIA_FETCH:
      console.log('TRIVIA_FETCH', action, state);
      console.log('ST', state);
      console.log('triviaInitialState', triviaInitialState);
      return { ...state, questions: [], loading: true, active: false };
    case types.TRIVIA_FETCHED:
      console.log('TRIVIA_FETCHED', action);
      return { ...state, questions: action.payload.results, loading: false, active: true };
    default:
      return state;
  }
};
