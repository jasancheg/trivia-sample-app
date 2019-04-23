/**
 * ./src/rducers/index.js
 *
 * @flow
 */

import { combineReducers } from "redux";

import orderReducer from "./order";
import pageReducer from "./page";
import userReducer from "./user";
import navReducer from "./nav";
import appReducer from "./app";

export default combineReducers({
  order: orderReducer,
  page: pageReducer,
  user: userReducer,
  nav: navReducer,
  app: appReducer
});
