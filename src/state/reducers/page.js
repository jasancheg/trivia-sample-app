/**
 * ./src/reducers/page.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";
import { state as stateConfig } from "../../core/constants";

const { types, pageInitialState } = stateConfig;

type StateType = {};

// reducer
export default (
  state: StateType = pageInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.PAGE_UPDATED:
      return { ...state, page: "page one" };
    default:
      return state;
  }
};
