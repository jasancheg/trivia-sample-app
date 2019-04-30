/**
 * ./src/rducers/index.js
 *
 * @flow
 */

import { combineReducers } from "redux";

import triviaReducer from "./trivia";
import userReducer from "./user";
import appReducer from "./app";
import navReducer from "./nav";

export default combineReducers({
  trivia: triviaReducer,
  user: userReducer,
  nav: navReducer,
  app: appReducer
});
