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
type DefaultPropsType = {
  theme?: ?{},
  navigation: {}
};
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
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    theme: null,
    navigation: { navigate: null }
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;
    this.styles = {
      container: null,
      item: null,
      text: null,
      textActive: null
    };

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
   * get composed styles from received props
   * - respect the entered order of custom props
   */
  getStyles(): ComponentStylesType {
    return getStyles(this.props, this.cName);
  }

  /**
   * getTextStyles
   * @param {string} route active route name
   * @returns {number} text styles
   */
  getTextStyles(route: string): ?number {
    const activeTab = "play";
    const { text, textActive } = this.styles;

    return activeTab === route ? textActive : text;
  }

  /**
   * getTextStyles
   * @param {string} route active route name
   */
  goTo(route: string): void {
    const { navigation } = this.props;
    // $FlowFixMe
    navigation.navigate(route);
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
   * render FooterNav component
   */
  render(): React$Element<typeof View> {
    const ios = Platform.OS === "ios";
    const PROFILE = "profile";
    const SCORE = "score";
    const PLAY = "play";
    // const { activeTab } = this.props;
    const activeTab = PLAY;
    this.styles = this.getStyles();

    const { container, item } = this.styles;

    return (
      <View ref={this.setFooterNavRef} style={container}>
        <View style={item}>
          <TouchableOpacity onPress={this.goTo(PLAY)}>
            <TabBarIcon
              focused={activeTab === PLAY}
              name={ios ? "videogame-asset" : "gamepad-variant"}
            />
            <Text capitalize style={this.getTextStyles(PLAY)}>
              {PLAY}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={item}>
          <TouchableOpacity onPress={this.goTo(SCORE)}>
            <TabBarIcon
              focused={activeTab === SCORE}
              name={ios ? "poll" : "clipboard-pulse-outline"}
            />
            <Text capitalize style={this.getTextStyles(SCORE)}>
              {SCORE}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={item}>
          <TouchableOpacity onPress={this.goTo(PROFILE)}>
            <TabBarIcon
              focused={activeTab === PROFILE}
              name={ios ? "account-circle" : "account-circle"}
            />
            <Text capitalize style={this.getTextStyles(PROFILE)}>
              {PROFILE}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
