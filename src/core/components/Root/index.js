/**
 * ./src/core/components/Root/index.js
 *
 * @flow
 */
/* eslint-disable no-return-assign */

import React, { Component } from "react";
import { View } from "react-native";

import Toast from "../ToastContainer";
import styles from "./styles";

// flow types
type PropsType = {
  children: React$Element<*>
};
type StateType = {};
type RootType = ?{};

/**
 * Define the splash loading component view
 *
 * @see https://local.triviag2i.inidea.io/docs/mobile/code/components/root.md
 * @name Root
 */
export default class Root extends Component<PropsType, StateType> {
  _root: RootType;

  render(): React$Element<*> {
    const { children } = this.props;

    return (
      <View
        ref={(c: ?{}): ?{} => (this._root = c)}
        {...this.props}
        style={styles.view}
      >
        {children}
        <Toast
          ref={(c: ?{}): ?{} => {
            if (!Toast.toastInstance) Toast.toastInstance = c;
          }}
        />
      </View>
    );
  }
}
