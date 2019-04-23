/**
 * ./src/core/components/SplashLoading/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";

import { esmerald } from "../../constants/theme/_constants";
import { getStyles } from "../../utils";

import type { StyleSheetType } from "../../flow";

// flow types
type DefaultPropsType = {
  theme?: ?{}
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType = { splashLoading: ?number } | StyleSheetType;
type RootType = ?React$Element<typeof View>;

/**
 * SplashLoading component
 */
export default class SplashLoading extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "splashLoading";

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    theme: null
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;
    this.styles = {
      splashLoading: null
    };

    this.setSplashLoadingRef = (element: RootType): void => {
      this._root = element;
    };
  }

  /**
   * the ref function
   * @type {React.Element}
   */
  setSplashLoadingRef: RootType => void;

  /**
   * get composed styles from received props
   */
  getStyles(): ComponentStylesType {
    return this.styles.splashLoading === null
      ? getStyles(this.props, this.cName)
      : this.styles;
  }

  /**
   * the ref element
   * @type {React.Element}
   */
  _root: RootType;

  /**
   * the ref element
   * @type {Object|null}
   */
  styles: ComponentStylesType;

  /**
   * render SplashLoading component
   */
  render(): React$Element<typeof View> {
    this.styles = this.getStyles();

    return (
      <View ref={this.setSplashLoadingRef} style={this.styles.splashLoading}>
        <ActivityIndicator size="large" color={esmerald} />
      </View>
    );
  }
}
