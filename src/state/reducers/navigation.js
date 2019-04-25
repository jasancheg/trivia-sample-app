/**
 * ./src/reducers/navigation.js
 *
 * @flow
 */

import type { ActionType } from "../actions/type";

export type TabType = "play" | "score" | "profile" | "notifications";
export type DayType = 1 | 2;

type StateType = {
  tab: TabType,
  day: DayType
};

const initialState: StateType = { tab: "play", day: 1 };

function navigation(
  state: StateType = initialState,
  action: ActionType
): StateType {
  if (action.type === "SWITCH_TAB") {
    return { ...state, tab: action.tab };
  }
  if (action.type === "SWITCH_DAY") {
    return { ...state, day: action.day };
  }
  if (action.type === "LOGGED_OUT") {
    return initialState;
  }
  return state;
}

module.exports = navigation;
