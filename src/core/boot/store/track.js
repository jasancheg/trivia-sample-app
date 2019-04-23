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

    case "SESSION_ADDED":
      analytics.logEvent("Added To Schedule", 1, { id: action.id });
      break;

    case "SESSION_REMOVED":
      analytics.logEvent("Removed From Schedule", 1, { id: action.id });
      break;

    case "TURNED_ON_PUSH_NOTIFICATIONS":
      analytics.logEvent("Enabled Push", 1);
      break;

    case "SKIPPED_PUSH_NOTIFICATIONS":
      analytics.logEvent("Disabled Push", 1);
      break;

    case "SET_SHARING":
      analytics.logEvent(
        action.enabled ? "Enabled Sharing" : "Disabled Sharing",
        1
      );
      break;
  }
};
