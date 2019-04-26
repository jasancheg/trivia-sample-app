/**
 * ./src/core/components/Statusbar/index.js
 *
 * @flow
 */

import { View, StatusBar, Platform } from "react-native";
import React, { Component } from "react";
import { Constants, Svg } from "expo";

import { theme } from "../../constants";
import { getStyles } from "../../utils";

import type { StyleSheetType } from "../../flow";

// flow types
type DefaultPropsType = {
  orange?: boolean,
  lavender?: boolean,
  transparent?: boolean,
  theme?: ?{}
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType = { statusbar: ?number } | StyleSheetType;

/**
 * Status bar component
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
  listOfCustomProps = ["transparent", "lavender", "orange"];

  /**
   * styles def for the component
   * @type {Object}
   */
  styles: ComponentStylesType = {
    statusbar: null
  };

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    orange: false,
    lavender: false,
    transparent: false,
    theme: null
  };

  constructor(props: PropsType): void {
    super((props: PropsType));
    // get composed styles from received props
    this.styles = getStyles(this.props, this.cName);
  }

  /**
   * Render Status bar component
   *
   * - it allows three custom props "transparent", "lavender", "orange"
   */
  render(): React$Element<typeof View> {
    const { orange, lavender, transparent } = this.props;

    return (
      <View style={this.styles.statusbar}>
        <StatusBar
          barStyle={
            transparent && Platform.OS === "ios"
              ? "dark-content"
              : "light-content"
          }
        />
        {orange || lavender || transparent ? null : (
          <Svg height={Constants.statusBarHeight} width={theme.layout.width}>
            <Svg.Defs>
              <Svg.LinearGradient
                id="grad"
                x1="0"
                y1="0"
                x2={theme.layout.width}
                y2="0"
              >
                <Svg.Stop
                  offset="0"
                  stopColor={theme.colors.orange}
                  stopOpacity="1"
                />
                <Svg.Stop
                  offset="1"
                  stopColor={theme.colors.lavender}
                  stopOpacity="1"
                />
              </Svg.LinearGradient>
            </Svg.Defs>
            <Svg.Rect
              x={0}
              y={0}
              width={theme.layout.width}
              height={Constants.statusBarHeight}
              strokeWidth={0}
              stroke="transparent"
              fill="url(#grad)"
            />
          </Svg>
        )}
      </View>
    );
  }
}
