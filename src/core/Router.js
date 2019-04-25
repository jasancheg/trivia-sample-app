/**
 * ./src/router/index.js
 *
 * @flow
 */
/* eslint-disable no-unused-vars */

import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { FooterTabNavigation, Router } from "./components";

import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Score from "../screens/Score";
import About from "../screens/About";
import Play from "../screens/Play";

import type { NaviType } from "./components/Router";

const {
  HeaderGradientBg,
  ContentComponent,
  HeaderLeft,
  HeaderRight,
  HeaderTitle
} = Router;

const Drawer = createDrawerNavigator(
  {
    footerTabNavigation: { screen: FooterTabNavigation },
    play: {
      screen: Play
    },
    score: {
      screen: Score
    },
    profile: {
      screen: Profile
    },
    notifications: {
      screen: Notifications
    },
    about: {
      screen: About
    }
  },
  {
    initialRouteName: "footerTabNavigation",
    contentComponent: ContentComponent
  }
);

const AppNavigator = createStackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: ({ navigation }: NaviType): {} => ({
      headerMode: "screen",
      headerTitleStyle: { flex: 1, textAlign: "center", fontWeight: "bold" },
      headerTitle: HeaderTitle(navigation),
      headerRight: HeaderRight(navigation),
      headerBackground: HeaderGradientBg,
      headerLeft: HeaderLeft(navigation)
      // headerTransparent: true,
      // headerTintColor: "#fff",
      // headerStyle: {}
    })
  }
});

export default AppNavigator;

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;
