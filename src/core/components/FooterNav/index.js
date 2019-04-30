/**
 * ./src/core/components/FooterNav/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { getStyles } from "../../utils";
import TabBarIcon from "../TabBarIcon";
import Text from "../Text";

import type { StyleSheetType } from "../../flow";

// flow types
type RouteType = { routeName: string };
type NavStateType = {|
  +index: number,
  +routes: Array<RouteType>
|};
type NavigationType = {|
  +state: NavStateType,
  +navigate: string => void
|};
type DefaultPropsType = {|
  +navigation: $ReadOnly<NavigationType>,
  theme?: ?{}
|};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType =
  | { container: ?number, item: ?number, text: ?number, textActive: ?number }
  | StyleSheetType;
type RootType = ?React$Element<View>;

/**
 * FooterNav component
 */
export default class FooterNav extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "footerNav";

  /**
   * styles def for the component
   * @type {Object}
   */
  styles: ComponentStylesType = {
    container: null,
    item: null,
    text: null,
    textActive: null
  };

  /**
   * routes list
   * @type {Array}
   */
  routes: Array<string> = [];

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    theme: null,
    navigation: {
      state: {
        index: 0,
        routes: []
      },
      navigate(): void {}
    }
  };

  constructor(props: PropsType): void {
    super((props: PropsType));
    this._root = null;
    this.styles = getStyles(this.props, this.cName);
    this.routes = this.getRoutes();
    this.setFooterNavRef = (element: RootType): void => {
      this._root = element;
    };
  }

  /**
   * the ref function
   * @type {React.Element}
   */
  setFooterNavRef: RootType => void;

  /**
   * getTextStyles
   * @param {string} route active route name
   * @returns {number} text styles
   */
  getTextStyles(route: string): ?number {
    const activeTab = this.getActiveTab();
    const { text, textActive } = this.styles;

    return activeTab === route ? textActive : text;
  }

  /**
   * getActiveTab
   * @param {string} route active route name
   * @returns {number} text styles
   */
  getActiveTab(): string {
    const { navigation } = this.props;
    return this.routes.length ? this.routes[navigation.state.index] : "";
  }

  /**
   * getActiveTab
   * @returns {array} routes list
   */
  getRoutes(): Array<string> {
    const { navigation } = this.props;
    return navigation.state.routes.map((r: RouteType): string => r.routeName);
  }

  /**
   * getTextStyles
   * @param {string} route active route name
   */
  goTo(route: string): void {
    const { navigation } = this.props;
    navigation.navigate(route);
  }

  /**
   * the ref element
   * @type {React.Element}
   */
  _root: RootType;

  /**
   * render FooterNav component
   */
  render(): React$Element<typeof View> {
    const ios = Platform.OS === "ios";
    const icons = [
      ios ? "videogame-asset" : "gamepad-variant",
      ios ? "poll" : "clipboard-pulse-outline",
      ios ? "account-circle" : "account-circle"
    ];
    const activeTab = this.getActiveTab();
    const { container, item } = this.styles;
    const o = { activeOpacity: 0.8 };

    return (
      <View ref={this.setFooterNavRef} style={container}>
        {this.routes.map(
          (r: string, i: number): React$Element<typeof View> => {
            return i === 3 ? null : (
              <View key={r} style={item}>
                <TouchableOpacity {...o} onPress={(): void => this.goTo(r)}>
                  <TabBarIcon focused={activeTab === r} name={icons[i]} />
                  <Text capitalize style={this.getTextStyles(r)}>
                    {r}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
        )}
      </View>
    );
  }
}
