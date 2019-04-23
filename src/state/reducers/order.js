/**
 * ./src/reducers/order.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";
import { state as stateConfig } from "../../core/constants";

const { types, orderInitialState } = stateConfig;

type StateType = {
  +orders: Array<{}>
};

// reducer
export default (
  state: StateType = orderInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.ORDERS_FETCHED:
      return { ...state, orders: [] };
    default:
      return state;
  }
};
