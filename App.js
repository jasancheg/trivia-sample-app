/**
 * ./App.js
 *
 * @flow
 */
/* eslint-disabled import/no-named-as-default */

import React, { Component } from "react";

import type { ConfigType } from "./src/core/constants/config";
import zConfig from "./src/core/constants/config";
import Trivia from "./src/Trivia";

// flow types
type PropsType = {};
type StateType = {
  config: ConfigType
};

/**
 * Create the Application
 *
 * @see https://local.triviag2i.inidea.io/docs/mobile/manual/app.md
 * @name App
 */
export default class App extends Component<PropsType, StateType> {
  /**
   * map application config
   * @type {Object}
   */
  state = {
    config: null
  };

  /**
   * get application config
   * @return {void}  state is updated
   */
  componentWillMount(): void {
    // config should match the ConfigType
    const config: ConfigType = zConfig;

    this.setState((prevState: {}): {} => ({ config }));
  }

  /**
   * boot the application
   * @return {React.Element}  main module
   */
  render(): React$Element<typeof Trivia> {
    const { config } = this.state;
    return <Trivia {...config} />;
  }
}
