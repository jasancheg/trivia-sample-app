/**
 * ./src/core/components/SplashLoading/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, View, Image } from "react-native";

import { lavender } from "../../constants/theme/_constants";
import { getStyles, assets } from "../../utils";

import type { StyleSheetType } from "../../flow";

const logo = require("../../../assets/images/logo.png");

// flow types
type DefaultPropsType = {
  theme?: ?{}
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType =
  | { splashLoading: ?number, image: ?number }
  | StyleSheetType;
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
   * styles def for the component
   * @type {Object}
   */
  styles: ComponentStylesType = {
    splashLoading: null,
    image: null
  };

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
    // get composed styles from received props
    this.styles = getStyles(this.props, this.cName);

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
   * the ref element
   * @type {React.Element}
   */
  _root: RootType;

  /**
   * render SplashLoading component
   */
  render(): React$Element<typeof View> {
    return (
      <View ref={this.setSplashLoadingRef} style={this.styles.splashLoading}>
        <View>
          <Image source={logo} style={this.styles.image} />
          <ActivityIndicator size="large" color={lavender} />
        </View>
      </View>
    );
  }
}
