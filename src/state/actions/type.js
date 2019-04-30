/**
 * ./src/actions/types.js
 *
 * @flow
 */

type ObjectType = {};

export type ActionType =
  | { 
    type: "SET_TESTS", 
    questions: Array<{}>,
    loading: boolean,
    tests: Array<{}>,
    scores: {
      easy: Array<{}>,
      medium: Array<{}>,
      hard: Array<{}>
    },
    active: boolean,
    index: number
  }
  | { 
      type: "TRIVIA_FETCH", 
      questions: Array<{}>,
      loading: boolean,
      tests: Array<{}>,
      scores: {
        easy: Array<{}>,
        medium: Array<{}>,
        hard: Array<{}>
      },
      active: boolean,
      index: number
    }
  | { 
      type: "TRIVIA_FETCHED",
      payload: {},
      questions: Array<{}>,
      tests: Array<{}>,
      loading: boolean,
      active: boolean,
      index: number  
    }
  | { type: "CONFIG_REQUEST", loading: boolean }
  | { type: "LOADED_CONFIG", config: ObjectType, loading: boolean }
  | {
      type: "LOGGED_IN",
      source: ?string,
      data: { id: string, name: string, sharedSchedule: ?boolean }
    }
  | { type: "SKIPPED_LOGIN" }
  | { type: "LOGGED_OUT" }
  | {
      type: "CHANGE_PAGE",
      page: "play" | "score" | "profile"
    }
  | {
      type: "USER_UPDATED",
      user: { name: string }
    }
  | {
      type: "OPENED_SIDENAV",
      opened: boolean
    };

export type DispatchType = (
  action: ActionType | ThunkActionType | PromiseActionType | Array<ActionType>
) => mixed;
export type GetStateType = () => ObjectType;
export type ThunkActionType = (
  dispatch: DispatchType,
  getState: GetStateType
) => mixed;
export type PromiseActionType = Promise<ActionType>;
