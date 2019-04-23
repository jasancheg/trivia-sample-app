/**
 * ./src/core/boot/store/configureStore.js
 *
 * @flow
 */

import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { config as appConfig, state } from "../../constants";
import { promise, array, analytics } from "./middleware";
import ensureCompatibility from "./compatibility";
import secureStorage from "./storage";

import reducers from "../../../state/reducers";

import type { CofiguredStoreType } from "./type";

// harcoded option just for debugging
const isDebuggingInChrome = true;

//
const logger = createLogger({
  predicate: (getState: {}, action: {}): boolean => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

// Secure storage
const persistConfig = {
  key: appConfig.storageKey,
  storage: secureStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * configureStore
 * @param  {Function} onComplete  callback
 * @return {Object}               store
 */
export default async (
  onComplete: (didReset: boolean) => void
): Promise<CofiguredStoreType> => {
  const didReset = await ensureCompatibility();

  const store = createStore(
    // $FlowFixMe
    persistedReducer,
    state.initialState,
    applyMiddleware(thunk, promise, array, analytics, logger)
  );

  const persistCb = (): void => {
    onComplete(didReset);
  };

  const persistor = persistStore(store, null, persistCb);

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return { persistor, store };
};
