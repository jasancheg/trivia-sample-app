/**
 * ./src/core/components/Statusbar/index.js
 *
 * @flow
 */

import { View, StatusBar, Platform } from "react-native";
import React, { Component } from "react";
import Expo from "expo";

import { theme } from "../../constants";
import { getStyles } from "../../utils";

import type { StyleSheetType } from "../../flow";

// flow types
type DefaultPropsType = {
  amethist?: boolean,
  esmerald?: boolean,
  transparent?: boolean,
  theme?: ?{}
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType = { statusbar: ?number } | StyleSheetType;

/**
 * Text component
 */
export default class Statusbar extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "statusbar";

  /**
   * [listOfCustomProps description]
   * @type {Array}
   */
  listOfCustomProps = ["transparent", "esmerald", "amethist"];

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    amethist: false,
    esmerald: false,
    transparent: false,
    theme: null
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this.styles = {
      statusbar: null
    };
  }

  /**
   * get composed styles from received props
   */
  getStyles(): ComponentStylesType {
    return this.styles.statusbar === null
      ? getStyles(this.props, this.cName)
      : this.styles;
  }

  /**
   * apply 'text' transforms and stylized component
   *
   * - respect the entered order of custom props
   */
  denormalize(): void {
    // initialize and add styles definition
    this.styles = this.getStyles();
  }

  /**
   * the ref element
   * @type {Object|null}
   */
  styles: ComponentStylesType;

  /**
   * Render Status bar component
   *
   * - it allows three custom props "transparent", "esmerald", "amethist"
   */
  render(): React$Element<typeof View> {
    // apply transforms to the received data and extract needed props
    this.denormalize();

    const { amethist, esmerald, transparent } = this.props;

    return (
      <View style={this.styles.statusbar}>
        <StatusBar
          barStyle={
            transparent && Platform.OS === "ios"
              ? "dark-content"
              : "light-content"
          }
        />
        {amethist || esmerald || transparent ? null : (
          <Expo.Svg
            height={Expo.Constants.statusBarHeight}
            width={theme.layout.width}
          >
            <Expo.Svg.Defs>
              <Expo.Svg.LinearGradient
                id="grad"
                x1="0"
                y1="0"
                x2={theme.layout.width}
                y2="0"
              >
                <Expo.Svg.Stop
                  offset="0"
                  stopColor={theme.colors.amethist}
                  stopOpacity="1"
                />
                <Expo.Svg.Stop
                  offset="1"
                  stopColor={theme.colors.esmerald}
                  stopOpacity="1"
                />
              </Expo.Svg.LinearGradient>
            </Expo.Svg.Defs>
            <Expo.Svg.Rect
              x={0}
              y={0}
              width={theme.layout.width}
              height={70}
              strokeWidth={0}
              stroke="transparent"
              fill="url(#grad)"
            />
          </Expo.Svg>
        )}
      </View>
    );
  }
}
