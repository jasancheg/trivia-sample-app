/**
 * ./src/core/components/Text/index.js
 *
 * @flow
 */

import React from "react";
import { View, Platform } from "react-native";
import {
  MaterialCommunityIcons as Icon,
  MaterialIcons as IconTwo
} from "@expo/vector-icons";

import { theme } from "../../constants";

// flow types
type DefaultPropsType = {
  name?: string,
  focused?: boolean
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};

const Ico = Platform.OS === "ios" ? IconTwo: Icon;

/**
 * Tab Bar component
 */
export default class TabBarIcon extends React.Component<PropsType, StateType> {
  render(): React$Element<typeof Ico> {
    const { name, focused } = this.props;
    const {
      tabIconMarginBottom,
      tabIconSelected,
      tabIconDefault,
      tabIconSize,
      styles
    } = theme.tabBarIcon;

    return (
      <View style={styles}>
        <Ico
          name={name}
          size={tabIconSize}
          style={{ marginBottom: tabIconMarginBottom }}
          color={focused ? tabIconSelected : tabIconDefault}
        />
      </View>
    );
  }
}
