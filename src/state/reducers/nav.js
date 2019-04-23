/**
 * ./src/reducers/nav.js
 *
 * @flow
 */

import { state as stateConfig } from "../../core/constants";

import type { ActionType } from "../actions/type";

const { types, navInitialState } = stateConfig;

type StateType = {};

// reducer
export default (
  state: StateType = navInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.NAV_UPDATED:
      return { ...state, nav: { tab: "nav name" } };
    default:
      return state;
  }
};
