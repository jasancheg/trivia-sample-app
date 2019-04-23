/**
 * ./src/core/components/Router/index.js
 *
 * @flow
 */
/* eslint-disable global-require */

import React from "react";
import Expo from "expo";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { DrawerActions, Header } from "react-navigation";
import { TouchableOpacity, View, Image } from "react-native";

import SideBar from "../../../screens/Sidebar";

import { theme } from "../../constants";
import { assets } from "../../utils";

import Hamburger from "../Hamburger";

type NavigationType = {
  navigate: string => void,
  state: { isDrawerOpen: boolean },
  dispatch: mixed => void
};

type LeftType = React$Element<typeof Hamburger>;

export type NaviType = {
  navigation: NavigationType
};

const { amethist, esmerald } = theme.colors;
const { width } = theme.layout;

const HeaderGradientBg = (
  <View
    style={{
      height: Header.HEIGHT + Expo.Constants.statusBarHeight
    }}
  >
    <Expo.Svg
      height={Header.HEIGHT + Expo.Constants.statusBarHeight}
      width={width}
    >
      <Expo.Svg.Defs>
        <Expo.Svg.LinearGradient id="grad" x1="0" y1="0" x2={width} y2="0">
          <Expo.Svg.Stop offset="0" stopColor={amethist} stopOpacity="1" />
          <Expo.Svg.Stop offset="1" stopColor={esmerald} stopOpacity="1" />
        </Expo.Svg.LinearGradient>
      </Expo.Svg.Defs>
      <Expo.Svg.Rect
        x={0}
        y={0}
        width={width}
        height={Header.HEIGHT + Expo.Constants.statusBarHeight}
        strokeWidth={0}
        stroke="transparent"
        fill="url(#grad)"
      />
    </Expo.Svg>
  </View>
);

const ContentComponent = (props: {}): React$Element<typeof SideBar> => (
  <SideBar {...props} />
);

export const HeaderRight = (
  navigation: NavigationType
): React$Element<typeof TouchableOpacity> => (
  <View style={{ marginRight: 10 }}>
    <TouchableOpacity
      onPress={(): void => {
        navigation.navigate("notifications");
      }}
    >
      <Icon name="bell" size={28} color="white" />
    </TouchableOpacity>
  </View>
);

const HeaderLeft = (navigation: NavigationType): LeftType => (
  <Hamburger
    active={navigation.state.isDrawerOpen}
    // $FlowFixMe
    onPress={(): void => navigation.dispatch(DrawerActions.toggleDrawer())}
  />
);

const MenuImage = ({ navigation }: NaviType): React$Element<typeof Image> => {
  if (!navigation.state.isDrawerOpen) {
    return <Image source={require("../../../assets/temp/menu-button.png")} />;
  } else {
    return <Image source={require("../../../assets/temp/left-arrow.png")} />;
  }
};

const HeaderTitle = (
  navigation: NavigationType
): React$Element<typeof Image> => (
  <Image
    style={{ width: 90, height: 35, flex: 1 }}
    source={assets.images.whitelogo}
    resizeMode="contain"
  />
);

export default {
  HeaderGradientBg,
  ContentComponent,
  HeaderTitle,
  HeaderRight,
  HeaderLeft,
  MenuImage
};
