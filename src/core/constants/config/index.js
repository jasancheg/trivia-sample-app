/**
 * ./src/core/config/index.js
 *
 * @flow
 */

/**
 * the application main configuration object
 */
export default {
  appVersion: "1.0.0",
  appName: "Triviag2i",
  version: 100,

  storageReplaceCharacter: "_",
  storageKey: "root",

  apiUrl: "https://local.triviag2i.inidea.io",
  signinEndpoint: "v1/signin",
  signupEndpoint: "v1/signup",
  defaultLanguaje: "es",

  graphqlURL: "http://localhost:4000/graphql",
  serverURL: "http://localhost:1337",
  timezone: "America/Costa_Rica",
  compatibleStoreVersion: "1.0",
  testMenuEnabled: false,

  get signInUrl(): string {
    return this.apiUrl + this.signinEndpoint;
  },

  get signUpUrl(): string {
    return this.apiUrl + this.signupEndpoint;
  }
};

/**
 * define the possibles config values in strict mode
 *
 * - configType could also be null when applications starts
 * @type {Object|null}
 */
export type ConfigType = {|
  appVersion: string,
  appName: string,
  version: number,

  storageReplaceCharacter: string,
  storageKey: string,

  apiUrl: string,
  signinEndpoint: string,
  signupEndpoint: string,
  defaultLanguaje: string,

  graphqlURL: string,
  serverURL: string,
  timezone: string,
  compatibleStoreVersion: string,
  testMenuEnabled: boolean,

  signInUrl: string,
  signUpUrl: string
|} | null;
