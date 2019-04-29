/**
 * ./src/rducers/index.js
 *
 * @flow
 */

import { combineReducers } from "redux";

import triviasReducer from "./trivias";
import userReducer from "./user";
import appReducer from "./app";
import navReducer from "./nav";

export default combineReducers({
  trivias: triviasReducer,
  user: userReducer,
  nav: navReducer,
  app: appReducer
});
