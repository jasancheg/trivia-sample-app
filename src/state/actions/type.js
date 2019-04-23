/**
 * ./src/actions/types.js
 *
 * @flow
 */

type ObjectType = {};

export type ActionType =
  | { type: "CONFIG_REQUEST", config: ObjectType }
  | { type: "CONFIG_FETCHED", config: ObjectType }
  | { type: "PAGE_UPDATED", config: ObjectType }
  | { type: "USER_UPDATED", config: ObjectType }
  | { type: "NAV_UPDATED", config: ObjectType }
  | { type: "ORDERS_REQUEST", config: ObjectType }
  | { type: "ORDERS_FETCHED", orders: Array<{}> }
  | { type: "LOADED_ABOUT", list: Array<ObjectType> }
  | { type: "LOADED_NOTIFICATIONS", list: Array<ObjectType> }
  | { type: "LOADED_MAPS", list: Array<ObjectType> }
  | {
      type: "LOADED_FRIENDS_SCHEDULES",
      list: Array<{
        id: string,
        name: string,
        schedule: { [key: string]: boolean }
      }>
    }
  | { type: "LOADED_CONFIG", config: ObjectType }
  | { type: "LOADED_SESSIONS", list: Array<ObjectType> }
  | { type: "LOADED_SURVEYS", list: Array<ObjectType> }
  | { type: "SUBMITTED_SURVEY_ANSWERS", id: string }
  | {
      type: "LOGGED_IN",
      source: ?string,
      data: { id: string, name: string, sharedSchedule: ?boolean }
    }
  | { type: "RESTORED_SCHEDULE", list: Array<ObjectType> }
  | { type: "SKIPPED_LOGIN" }
  | { type: "LOGGED_OUT" }
  | { type: "SESSION_ADDED", id: string }
  | { type: "SESSION_REMOVED", id: string }
  | { type: "SET_SHARING", enabled: boolean }
  | { type: "APPLY_TOPICS_FILTER", topics: { [key: string]: boolean } }
  | { type: "CLEAR_FILTER" }
  | { type: "SWITCH_DAY", day: 1 | 2 }
  | {
      type: "SWITCH_TAB",
      tab: "schedule" | "my-schedule" | "map" | "notifications" | "info"
    }
  | { type: "TURNED_ON_PUSH_NOTIFICATIONS" }
  | { type: "REGISTERED_PUSH_NOTIFICATIONS" }
  | { type: "SKIPPED_PUSH_NOTIFICATIONS" }
  | { type: "RECEIVED_PUSH_NOTIFICATION", notification: {} }
  | { type: "SEEN_ALL_NOTIFICATIONS" }
  | { type: "RESET_NUXES" };

export type DispatchType = (
  action: ActionType | ThunkActionType | PromiseActionType | Array<ActionType>
) => mixed;
export type GetStateType = () => ObjectType;
export type ThunkActionType = (
  dispatch: DispatchType,
  getState: GetStateType
) => mixed;
export type PromiseActionType = Promise<ActionType>;
