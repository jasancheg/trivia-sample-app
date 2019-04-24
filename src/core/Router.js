/**
 * ./src/router/index.js
 *
 * @flow
 */
/* eslint-disable no-unused-vars */

import React from "react";
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";

import { FooterTabNavigation, Router } from "./components";

import Notifications from "../screens/Notifications";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import Search from "../screens/Search";
import Home from "../screens/Home";

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
    home: {
      screen: Home
    },
    search: {
      screen: Search
    },
    orders: {
      screen: Orders
    },
    profile: {
      screen: Profile
    },
    notifications: {
      screen: Notifications
    }
  },
  {
    initialRouteName: "footerTabNavigation",
    contentComponent: ContentComponent
  }
);

const AppNavigator = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "screen",
    navigationOptions: ({ navigation }: NaviType): {} => ({
      headerTitleStyle: { flex: 1, textAlign: "center", fontWeight: "bold" },
      headerTitle: HeaderTitle(navigation),
      headerRight: HeaderRight(navigation),
      headerBackground: HeaderGradientBg,
      headerLeft: HeaderLeft(navigation),
      headerTransparent: true,
      headerTintColor: "#fff",
      headerStyle: {}
    })
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
