/**
 * ./src/reducers/trivias.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";
import { state as stateConfig } from "../../core/constants";

const { types, triviasInitialState } = stateConfig;

type StateType = {
  +list: Array<{}>
};

// reducer
export default (
  state: StateType = triviasInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.TRIVIAS_FETCHED:
      console.log('asdfasdf', action);
      return { ...state, list: [] };
    default:
      return state;
  }
};
