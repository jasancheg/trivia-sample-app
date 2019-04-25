/**
 * ./src/router/index.js
 *
 * @flow
 */
/* eslint-disable no-unused-vars */

import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

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

export default createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
      navigationOptions: ({ navigation }: NaviType): {} => ({
        headerTitleStyle: { flex: 1, textAlign: "center" },
        headerTitle: HeaderTitle(navigation),
        headerRight: HeaderRight(navigation),
        headerBackground: HeaderGradientBg,
        headerLeft: HeaderLeft(navigation)
        // headerTransparent: true,
        // headerTintColor: "#fff",
        // headerStyle: {}
      })
    }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "screen"
  }
);

// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;
