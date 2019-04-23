/**
 * ./src/core/boot/store/promise.js
 *
 * @flow
 */
/* eslint-disable */

import { config } from "../../constants";
import track from "./track";

import type { ActionType } from "../../../state/actions/type";
import type { StoreMiddlewareType } from "./type";

const warn = (error: { message?: mixed }): void => {
  // only log promise failures when debug menu is enabled
  if (config.testMenuEnabled) {
    console.warn(error.message || error);
  }

  // to let the caller handle the rejection
  throw error;
};

//
export const promise = (store: StoreMiddlewareType): any => next => action =>
  typeof action.then === "function"
    ? Promise.resolve(action).then(next, warn)
    : next(action);

//
export const array = (store: StoreMiddlewareType): any => next => action =>
  Array.isArray(action) ? action.map(next) : next(action);

//
export const analytics = (
  store: StoreMiddlewareType
): any => next => action => {
  track(action);
  return next(action);
};
