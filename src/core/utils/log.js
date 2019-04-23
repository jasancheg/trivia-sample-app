/**
 * ./src/core/utils/log.js
 *
 * @flow
 */

export const log = (msg: string = "unknown msg", data: ?mixed): void => {
  console.log(msg, data);
};

export const error = (msg: string = "unknown error", err: ?mixed): void => {
  console.error(msg, err);
};
