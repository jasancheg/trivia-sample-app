/**
 * ./src/core/boot/store/type.js
 *
 * @flow
 */

// import type { ActionType } from "../../../state/actions/type";

//
export type StoreType = {
  dispatch: () => mixed,
  subscribe: () => () => void,
  getState: () => mixed,
  replaceReducer: () => void
};

export type StoreMiddlewareType = {
  +dispatch: () => mixed,
  +getState: () => mixed
};

type PersistorStateType = {
  registry: Array<string>,
  bootstrapped: boolean
};

type RegisterActionType = {
  type: string,
  key: string
};

type RehydrateActionType = {
  type: string,
  key: string,
  payload?: mixed,
  err?: mixed
};

type PersistorActionType = RehydrateActionType | RegisterActionType;
type PersistorSubscribeCallbackType = () => mixed;

export type CofiguredStoreType = {
  store: ?StoreType,
  persistor: ?PersistorType
};

export type PersistorType = {
  +dispatch: (action: PersistorActionType) => PersistorActionType,
  +subscribe: (callback: PersistorSubscribeCallbackType) => () => void,
  +getState: () => PersistorStateType,
  flush: () => Promise<mixed>,
  pause: () => void,
  persist: () => void,
  purge: () => Promise<mixed>
};

//
export type ImageType = {
  height: number,
  weidth: number,
  name: string,
  uri: string,
  [name: string]: string | boolean | Array<mixed>
};
export type ImagesType = {
  [name: string]: ImageType
};

//
export type StateType = {};
