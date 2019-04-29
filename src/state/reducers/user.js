/**
 * ./src/reducers/user.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";
import { state as stateConfig } from "../../core/constants";

const { types, userInitialState } = stateConfig;

type StateType = {};

// reducer
export default (
  state: StateType = userInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.USER_UPDATED:
      return { ...state, user: { name: "username" } };
    default:
      return state;
  }
};
