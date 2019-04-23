/**
 * ./src/core/components/FooterNav/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons as Icon,
  MaterialIcons as IconTwo
} from "@expo/vector-icons";
// import Expo from "expo";

// import { footerNavHeight } from "../../constants/theme/_constants";
// import { theme } from "../../constants";
import { getStyles } from "../../utils";

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
type ComponentStylesType = { footerNav: ?number } | StyleSheetType;
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
    navigation: {}
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;
    this.styles = {
      footerNav: null
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
   */
  getStyles(): ComponentStylesType {
    return this.styles.footerNav === null
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
   * render FooterNav component
   */
  render(): React$Element<typeof View> {
    this.styles = this.getStyles();

    const { navigation } = this.props;
    const { footerNav } = this.styles;

    return (
      <View ref={this.setFooterNavRef} style={footerNav}>
        <View>
          <TouchableOpacity
            onPress={(): void => {
              navigation.navigate("home");
            }}
          >
            <View>
              <Icon name="home" size={28} color="white" />
            </View>
            <View>
              <Text style={{ color: "#fff" }}>Inicio</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={(): void => {
              navigation.navigate("search");
            }}
          >
            <View>
              <IconTwo name="search" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={(): void => {
              navigation.navigate("orders");
            }}
          >
            <View>
              <Icon name="clipboard-text" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={(): void => {
              navigation.navigate("profile");
            }}
          >
            <View>
              <Icon name="login" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
