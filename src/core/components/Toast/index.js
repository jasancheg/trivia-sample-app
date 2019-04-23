/**
 * ./src/core/components/Toast/index.js
 *
 * @flow
 */
/* eslint-disable no-return-assign */

import React, { Component } from "react";
import { View } from "react-native";

// flow types
type PropsType = {};
type StateType = {};

class Toast extends Component<PropsType, StateType> {
  _root: ?{} | void;

  render(): React$Element<*> {
    return <View ref={(c: ?{}): ?{} => (this._root = c)} {...this.props} />;
  }
}

export default Toast;
