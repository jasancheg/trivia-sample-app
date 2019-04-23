/**
 * ./src/actions/config.js
 *
 * @flow
 */

// import Trivia from "trivia";
// import { InteractionManager } from "react-native";

import type { ActionType } from "./type";

async function loadConfig(): Promise<ActionType> {
  // const config = await Trivia.Config.get();
  // await InteractionManager.runAfterInteractions();
  // return {
  //   type: "LOADED_CONFIG",
  //   config
  // };

  return {
    type: "LOADED_CONFIG",
    config: {}
  };
}

module.exports = { loadConfig };
