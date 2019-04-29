/**
 * ./src/reducers/order.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";
import { state as stateConfig } from "../../core/constants";

const { types, triviasInitialState } = stateConfig;

type StateType = {
  +trivias: Array<{}>
};

// reducer
export default (
  state: StateType = triviasInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.TRIVIAS_FETCHED:
      return { ...state, trivias: [] };
    default:
      return state;
  }
};
