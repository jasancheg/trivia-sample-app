/**
 * ./src/actions/config.js
 *
 * @flow
 */

// import Trivia from "@trivia/utils";
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
    config: {},
    loading: false
  };
}

module.exports = { loadConfig };
