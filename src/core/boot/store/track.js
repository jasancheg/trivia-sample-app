/**
 * ./src/core/boot/store/track.js
 *
 * @flow
 */
/* eslint-disable default-case */

import type { ActionType } from "../../../state/actions/type";
import { analytics } from "../../utils";

export default (action: ActionType): void => {
  switch (action.type) {
    case "LOGGED_IN":
      analytics.logEvent("Login", 1, { source: action.source || "" });
      break;

    case "LOGGED_OUT":
      analytics.logEvent("Logout", 1);
      break;

    case "SKIPPED_LOGIN":
      analytics.logEvent("Skip login", 1);
      break;
  }
};
