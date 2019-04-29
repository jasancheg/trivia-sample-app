/**
 * ./src/reducers/nav.js
 *
 * @flow
 */

import { state as stateConfig } from "../../core/constants";
import type { ActionType } from "../actions/type";

export type TabType = "play" | "score" | "profile" | "about" | "notifications";

type StateType = {
  page: TabType
};

const { types, navInitialState } = stateConfig;

// reducer
export default (
  state: StateType = navInitialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case types.OPENED_SIDENAV:
      return { ...state, openedSideNav: action.opened };

    case types.CHANGE_PAGE:
      return { ...state, page: action.page };

    case types.LOGGED_OUT:
      return navInitialState;

    default:
      return state;
  }
};
