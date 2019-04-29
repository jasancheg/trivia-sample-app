/**
 * ./src/reducers/config.js
 *
 * @flow
 */

import { state as stateConfig } from "../../core/constants";

import type { ActionType } from "../actions/type";

const { types, appInitialState } = stateConfig;

type StateType = {
  +loading: boolean
};

// reducer
export default (
  state: StateType = appInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.CONFIG_REQUEST:
      return { ...state, loading: true };

    case types.LOADED_CONFIG:
      return { ...state, loading: false, config: action.config };

    default:
      return state;
  }
};
