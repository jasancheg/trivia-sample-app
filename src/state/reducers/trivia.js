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
    case types.RESET:
      return { ...triviaInitialState };
    case types.TRIVIA_FETCH:
      return { ...state, questions: [], loading: true, active: false, index: action.index };
    case types.TRIVIA_FETCHED:
      return { ...state, questions: action.payload.results, loading: false, active: true };
    default:
      return state;
  }
};
