/**
 * ./src/core/boot/store/compatibility.js
 *
 * @flow
 */
/* eslint-disable no-return-await */

import { config } from "../../constants";
import { error, log } from "../../utils";
import secureStorage from "./storage";

const LS_GROUP = "TriviaStoreCompatibility";
const LS_VERSIONING = `${LS_GROUP}:version`;

/**
 * ensureCompatibility
 * @return {[type]} [description]
 */
export default async (): Promise<boolean> => {
  try {
    const stored = await secureStorage.getItem(LS_VERSIONING);
    // console.log("compatibility try", stored, config.compatibleStoreVersion);
    if (stored && stored === JSON.stringify(config.compatibleStoreVersion)) {
      // no need to update
      log("compatibility::uptoday::", true);
      return false;
    }
  } catch (err) {
    error("compatibility::ensureCompatibility", err);
  }

  return await resetCompatibility();
};

async function resetCompatibility(): Promise<boolean> {
  try {
    const keys = await secureStorage.getAllKeys();
    // force clear everything except for versioning
    // (all reduxPersist:x and Server:x keys)
    const targets = (keys || []).filter(
      (k: string): mixed => k !== LS_VERSIONING
    );

    if (targets.length) {
      console.log("targets", targets);
      await secureStorage.removeAll();
    }

    // after storage reset,
    // update the compatibility to the current storage version
    return await updateCompatibility();
  } catch (err) {
    error("compatibility::resetCompatibility", err);
  }

  return false;
}

async function updateCompatibility(): Promise<boolean> {
  try {
    await secureStorage.setItem(
      LS_VERSIONING,
      JSON.stringify(config.compatibleStoreVersion)
    );
    return true;
  } catch (err) {
    error("compatibility::updateCompatibility", err);
  }
  return false;
}
